import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import MainPage from './components/MainPage.js';
import LoginPage_old from './components/LoginPage.jsx';
import { MainUserPage } from './components/MainUserPage.jsx';


const App = () => {

  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-auto'>
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <p className="nav-link"><Link to="/">StartPage</Link></p>
                </li>
                <li className="nav-item">
                  <p className="nav-link"><Link to="/login">Login</Link></p>
                </li>
                <li className="nav-item">
                  <p className="nav-link"><Link to="/home">Home</Link></p>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-sm'>
            <Routes>

              <Route path="/login" element={ <LoginPage_old/> }/>

              {/* <Route path="/home" element={ <PrivateRoute/> }> */}
              <Route path="/home" element={ <MainUserPage/> }/>
              {/* </Route> */}

              <Route path="/" element={ <MainPage/> }/>
              <Route path="*" element={<div>404... not found </div>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
