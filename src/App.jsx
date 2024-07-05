import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { observer } from "mobx-react-lite";

import AuthStore from './components/store.js'
import PrivateRoute from './components/PrivateRoute.jsx';

import MainPage from './components/MainPage.js';
// import LoginPage from './components/LoginPage.jsx';
import LoginPage_old from './components/LoginPage_old.jsx';
import { MainUserPage } from './components/MainUserPage.jsx';
import MainTestComponent from './components/MainTestComponent.jsx'
import { useEffect } from 'react';


const App = () => {

  // useEffect(()  => {
  //   console.log('useEffect');
  //   AuthStore.checkAuth();
  // }, []);

  return (
    <BrowserRouter>
      <div>
          <nav>
            <ul>
              <li>
                <Link to="/">StartPage</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </nav>

        <Routes>
          <Route path="/login" element={ <LoginPage_old/> }/>

          {/* <Route path="/home" element={ <PrivateRoute/> }> */}
          <Route path="/home" element={ <MainUserPage/> }/>
          {/* </Route> */}

          <Route path="/" element={ <MainPage/> }/>
          <Route path="*" element={<div>404... not found </div>} />
        </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
