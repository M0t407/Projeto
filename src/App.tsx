import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Principal from './components/Moldura';
import Cadastro from './pages/Cadastro';
import AddContas from './pages/AddContas';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login></Login>} />
          <Route path='/' element={<Principal><Dashboard /></Principal>} />
          <Route path='/addcontas' element={<Principal><AddContas /></Principal>} />
          <Route path='/cadastro' element={<Principal><Cadastro /></Principal>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
