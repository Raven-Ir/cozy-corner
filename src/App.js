import './index.css';
import Home from './Pages/Home'
import { Route, Routes } from 'react-router';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import UsersLibrary from './Pages/UsersLibrary';


function App() {
  return (
    <>
    <AuthContextProvider>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<LogIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/library' element={
                <ProtectedRoute>
                  <UsersLibrary />
                </ProtectedRoute>
              } />
          </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
