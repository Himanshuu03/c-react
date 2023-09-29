import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home'
import Aboutus from './Routes/Aboutus';
import ContactUs from './Routes/ContactUs';
import Services from './Routes/Services';
import Faq from './Routes/Faq';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Home/>
      <Link to="/">
      <button>
        Home
      </button>
      </Link>
      <Routes>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
      </div>
  );
}

export default App;
