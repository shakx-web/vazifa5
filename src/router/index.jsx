import { Route, Routes } from 'react-router-dom'
import App from '../App';
import Login from '../pages/login';
import SignUp from '../pages/Signup';

function Routers() {
  


  return (
    <>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>
    </>
  )
}

export default Routers