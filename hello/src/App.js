import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home'
import Aboutus from './Routes/Aboutus';

function App() {

  return (
    <div>
      <Link to="/">
      <button>
        Home
      </button>
      </Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
      </Routes>
      </div>
  );
}

// function AboutUs() {
//   return (
//     <div className="aboutUs"> 
//        <p>Hello this is aboutus Page</p>
//     </div>
//   )
// }
export default App;
