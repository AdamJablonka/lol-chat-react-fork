import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Register />}/>        
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>}/>
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
