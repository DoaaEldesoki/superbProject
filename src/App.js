import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
          <Navbar/>
    <Routes>
    <Route path={"/"} exact element={<Home />}></Route>
        <Route path={"/About"} exact element={<About/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
