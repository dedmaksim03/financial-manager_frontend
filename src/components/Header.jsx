import React from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h2>Лучшее приложение</h2>
        {/* <nav>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <p className="nav-link"><Link to="/">Главная страница</Link></p>
                </li>
                <li className="nav-item">
                    <p className="nav-link"><Link to="/login">Login</Link></p>
                </li>
                <li className="nav-item">
                    <p className="nav-link"><Link to="/home">Домашнаяя страница</Link></p>
                </li>
            </ul>
        </nav> */}
    </div>
  )
}

export default Header