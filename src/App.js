import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
        <Router>
          <Routes>
              <Route path = "/" element = {<MainPage/>}></Route>
              <Route path = "/login" element = { <LoginPage/> }></Route>
          </Routes>                
        </Router>
    </>
    
  );
}

export default App;
