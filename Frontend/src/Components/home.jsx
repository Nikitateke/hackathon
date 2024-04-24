
import { useNavigate,Link } from "react-router-dom"
import axios from "axios"
import Categorylist from "../page/Categorylist";
import { useEffect } from "react";


function Home(){
    
const navigate = useNavigate()

 const logout = ()=>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('name')   
    navigate('/login')
 }
const name = sessionStorage.getItem('name')

 return(
<div className="container">
<h1 align='center'>Sunbeam Blogs</h1>

   <div className="row container">
    <div className="" align='center'>        

        <div style={{fontSize:'20px'}} >  Welcome, {name}  </div><br />
            <Link to='/newblog' className="btn btn-primary mb-3 mt-1">New Blog</Link><br />
            <Link className="btn btn-primary mb-3 mt-1">All Blog</Link><br />
            <Link className="btn btn-primary mb-3 mt-1">My Blog</Link><br />
            <Link className="btn btn-primary mb-3 mt-1">Find Blog</Link><br />
            <Link to='/category' className="btn btn-primary mb-3 mt-1">Categories</Link><br />
            <button onClick={logout} className="btn btn-danger mb-3 mt-5">Sign Out</button><br/>
    </div>

   </div>   

</div>
 )

}
export default Home