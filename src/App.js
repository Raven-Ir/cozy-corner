import './App.css';
import Library from './Components/Library';
import { UserProfile } from './Components/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      
      <SideBar />
      <h1 className='CozyCorner' fixed="top" >Cozy Corner</h1>

      <UserProfile /> 
      <Library />
      

    </div>
  );
}

export default App;
