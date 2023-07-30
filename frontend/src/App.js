import './App.css';
import { NavBar } from './NavBar/NavBar';
import { AppRoutes } from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className = 'App'>
      <NavBar/> 
      <AppRoutes/>
     
    </div>
  );
}

export default App;
