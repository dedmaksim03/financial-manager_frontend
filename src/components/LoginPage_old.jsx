import React, {useState} from 'react'
import { getToken } from '../service/UserService'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigator = useNavigate();

    function handleUsername(e){
        setUsername(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    function login(e){
        e.preventDefault();

        const user = {username, password}
        console.log(user);

        getToken(user).then((response) => {
            if (response != null){
                console.log(response.data);
                navigator("/");
            }          
        })

    }

  return (
    <div className='container'>
        <br/><br/>
      <div className='card col-md-6 offset-md-3 offset-md-3'>
        <h2 className='text-center'>Login</h2>
        <div className='card-body'>
            <form>
                <div className='form-group mb-2'>
                    <label className='form-label'>Имя пользователя:</label>
                    <input
                        type='text'
                        placeholder='Гоша'
                        name='userName'
                        value={username}
                        className='form-control'
                        onChange={handleUsername}
                    ></input>
                </div>

                <div className='form-group mb-2'>
                    <label className='form-label'>Пароль:</label>
                    <input
                        type='password'
                        placeholder='1234'
                        name='password'
                        value={password}
                        className='form-control'
                        onChange={handlePassword}
                    ></input>
                </div>

                <button className='btn btn-success' onClick={login}>Войти</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
