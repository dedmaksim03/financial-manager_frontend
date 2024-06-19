import React, {useState} from 'react'

const LoginPage = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function handleUserName(e){
        setUserName(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    function login(e){
        e.preventDefault();

        const user = {userName, password}
        console.log(user);
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
                        value={userName}
                        className='form-control'
                        onChange={handleUserName}
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
