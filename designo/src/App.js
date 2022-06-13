import './App.css';
import Header from './components/Header/header';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import HomeProjects from './components/Home/HomeProjects';
import HomeDescribe from './components/Home/HomeDescribe';
import HomeFooter from './components/Home/HomeFooter';

function App() {
  return (
    <div className="App font-jost">
      <Routes>
        <Route path='/' element={<><Header/><Home/><HomeProjects/><HomeDescribe/><HomeFooter/></>}/>
        <Route path='/our-company' element={<><Header/></>}/>
        <Route path='/location' element={<><Header/></>}/>
        <Route path='/contact' element={<><Header/></>}/>
      </Routes>
    </div>
  );
}

export default App;
