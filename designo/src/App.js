import './App.css';
import Header from './components/Header/header';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header/></>}/>
        <Route path='/our-company' element={<><Header/></>}/>
        <Route path='/location' element={<><Header/></>}/>
        <Route path='/contact' element={<><Header/></>}/>
      </Routes>
    </div>
  );
}

export default App;
