import './App.css';
import Header from './components/Header/header';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/home';
import HomeProjects from './components/Home/HomeProjects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header/><Home/><HomeProjects/></>}/>
        <Route path='/our-company' element={<><Header/></>}/>
        <Route path='/location' element={<><Header/></>}/>
        <Route path='/contact' element={<><Header/></>}/>
      </Routes>
    </div>
  );
}

export default App;
