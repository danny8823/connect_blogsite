
import './App.css';
import { NavBar } from './NavBar/NavBar';
import { AppRoutes } from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className = 'App'>
        <ToastContainer/>
        <NavBar/> 
        <AppRoutes/>
        
    </div>
  );
}

export default App;
