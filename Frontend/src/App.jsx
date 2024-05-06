import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import RegisterForm from './Components/form';
import { Route,Routes } from 'react-router-dom';
import Login from './Components/login';
import Home from './Components/home';
import Categorylist from './page/Categorylist';
import Addblog from './page/Addblogs';
import AllBlog from './page/Allblog';
import MyBlog from './page/Myblogs';




function App() {

    return  <div className='container mt-5'>
      <ToastContainer/>
      <div className='row'>
        <div className='col-4 mt-5'>
        {
        sessionStorage.getItem('token') && <Home/>
      }
        </div>
        
        <div className='col-6'>
        <Routes>.
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/category' element={<Categorylist/>}></Route> 
        <Route path='/newblog' element={<Addblog/>}></Route>         
        <Route path='/allblog' element={<AllBlog />}></Route>         
        <Route path='/myblog' element={<MyBlog />}></Route>         
      </Routes>
        </div>
      </div> 
       {/* <Userlist ></Userlist> */}
    </div>   
}

export default App;
