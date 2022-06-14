import './App.css';
import { useState } from 'react';
import Header from './components/Header/header';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import HomeProjects from './components/Home/HomeProjects';
import HomeDescribe from './components/Home/HomeDescribe';
import HomeFooter from './components/Home/HomeFooter';

function App() {
  const [toggleButton, setToggleButton] = useState(false);

  return (
    <div className={"font-jost"}>
      <Routes>
          <Route path='/' element={<><Header button={toggleButton} setButton={setToggleButton} /><Home button={toggleButton} /><HomeProjects/><HomeDescribe/><HomeFooter/></>}/>
          <Route path='/our-company' element={<><Header/></>}/>
          <Route path='/location' element={<><Header/></>}/>
          <Route path='/contact' element={<><Header/></>}/>
      </Routes>
    </div>
  );
}

export default App;
