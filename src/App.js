import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
          <Navbar/>
    <Routes>
    <Route path={"/"} exact element={<Home />}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
