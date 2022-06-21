import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Principal from './components/Moldura';
import Contacts from './pages/Contacts';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login></Login>} />
          <Route path='/' element={<Principal><Dashboard /></Principal>} />
          <Route path='/contacts' element={<Principal><Contacts /></Principal>} />
          <Route path='/cadastro' element={<Principal><Cadastro /></Principal>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
