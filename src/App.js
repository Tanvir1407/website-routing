import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navber from './components/Navber';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Home from './Pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={ <Error></Error>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
