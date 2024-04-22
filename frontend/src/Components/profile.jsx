import { useNavigate } from "react-router-dom"



function Profile(){

const navigate = useNavigate()

const changeEmail = ()=>{
    debugger;
   navigate('/editEmail')  
}
const changePassword = ()=>{
    navigate('/editPassword')  
 }




    return (
        <div className="container">

        <h1>Welcome user</h1>
            <button className="btn btn-primary me-5" onClick={changeEmail}>Change Email ID</button>


            <button className="btn btn-primary" onClick={changePassword}> Change Password</button>


        </div>
    )
}

export default Profile