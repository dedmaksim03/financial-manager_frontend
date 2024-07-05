import React, {Component} from 'react'
import AuthStore from './store'

class LoginPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        };

    }

    handleUsername(event){
        this.setState({username: event.target.value});
        console.log(this.state.username);
    }

    handlePassword(event){
        this.setState({password: event.target.value})
    }

    login(event){
        event.preventDefault();
        console.log(this.state);
        AuthStore.login(this.state.username, this.state.password);
        console.log(localStorage.getItem('token'));
    }

    render(){
        return(
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
                        name='username'
                        value={this.username}
                        className='form-control'
                        onChange={this.handleUsername.bind(this)}
                    ></input>
                </div>

                <div className='form-group mb-2'>
                    <label className='form-label'>Пароль:</label>
                    <input
                        type='password'
                        placeholder='1234'
                        name='password'
                        value={this.password}
                        className='form-control'
                        onChange={this.handlePassword.bind(this)}
                    ></input>
                </div>

                <button className='btn btn-success' onClick={this.login.bind(this)}>Войти</button>
            </form>
        </div>
      </div>
    </div>
        );
    }
}

export default LoginPage;
