import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Principal from './components/Principal';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Principal><Dashboard /></Principal>} />
          <Route path='/contacts' element={<Principal><Contacts /></Principal>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
