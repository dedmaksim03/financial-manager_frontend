import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import MainTestComponent from "./components/MainTestComponent";

function App() {
  return (
    <>
        
        <Router>
          <MainTestComponent/>
          <div className="container">
          <Routes>
              <Route path = "/" element = {<MainPage/>}></Route>
              <Route path = "/login" element = { <LoginPage/> }></Route>
          </Routes>
          </div>                
        </Router>
    </>
    
  );
}

export default App;
