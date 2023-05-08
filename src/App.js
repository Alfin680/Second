import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Addblog from './components/Addblog';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Home />
      <Addblog />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Addblog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
