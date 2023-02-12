import './index.css';
import Home from './Pages/Home'
import { Route, Routes } from 'react-router';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/library' element={<usersLibrary />}/>
      </Routes>
    </>
  );
}

export default App;
