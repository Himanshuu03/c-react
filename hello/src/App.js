import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home'
import Aboutus from './Routes/Aboutus';
import ContactUs from './Routes/ContactUs';
import Services from './Routes/Services';
import Faq from './Routes/Faq';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import State from './components/State';
import Form from './components/Form';


function App() {

  return (
    <div>
      <Link to="/">
      <button>
        Home
      </button>
      </Link>
      <Link to="/state">
        <button>
          Class
        </button>
      </Link>
      <Link to="/form">
        <button>
          Form
        </button>
      </Link>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/state" element={<State/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
      </div>
  );
}

export default App;
