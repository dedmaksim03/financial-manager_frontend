import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import MainPage from './components/MainPage.js';
import LoginPage from './components/LoginPage.jsx';
import Header from './components/Header.jsx';
import { MainUserPage } from './components/MainUserPage.jsx';


const App = () => {

  return (
    <BrowserRouter>
      <div className='container'>
        <div className='payload'>
          <Routes>
            <Route path="/login" element={ <LoginPage/> }/>
            <Route path="/" element={ <MainUserPage/> }/>
            {/* <Route path="/" element={ <MainPage/> }/> */}
            <Route path="*" element={<div>404... not found </div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
