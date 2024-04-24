import { useState } from "react"
import axios from "axios"
import {  Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function RegisterForm(){
   
const navigate = useNavigate()

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password, setPass] = useState('')
const [phoneno, setPhoneno] = useState('')
   
 const submit = async ()=>{    

    if(name == '' || email == '' || password == ''){
        toast.warning('Enter credentials name, email and password')
    }else{
        const body = {
            name,
            email,
            password,
            phoneno
        }
        const response = await axios.post('http://localhost:4000/user/register',body)
        const result = response.data
        console.log(response)
        if(result['status'] == 'success'){
            toast.success('You have Registered Successfully')
            navigate('/login')
        }else{
            toast.error('Registration Failed')
        }
    }
}

const onCancel=()=>{
    navigate('/login')
} 
   
    return(
      <div className="row">
        <div className="col-3">

        </div>
        <div className="col-6">
        <h3>My Blog Registration </h3>
        <div className="mb-3">
            <label htmlFor="" >Name </label>
            <input type="text" className="form-control" onChange={(e)=>{
                setName(e.target.value)
            }}/>
        </div>
        <div className="mb-3">
            <label htmlFor="" >Email</label>
            <input type="text" className="form-control" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
        </div>
        <div className="mb-3">
            <label htmlFor="" >Password</label>
            <input type="text" className="form-control" onChange={(e)=>{
                setPass(e.target.value)
            }}/>
        </div>
        <div className="mb-3">
            <label htmlFor="" >Contact No. </label>
            <input type="email" className="form-control" onChange={(e)=>{
                setPhoneno(e.target.value)
            }}/>
        </div>
        <div className="mb-3">
            <p>Already A user? <Link to='/login'>Login here</Link></p>
            <button className="btn btn-success me-3" onClick={submit}> Register</button>
            <button className="btn btn-danger" onClick={onCancel}> Cancel</button>
        </div>
        </div>
        <div className="col-3">
        </div>
      </div>
    )
}
export default RegisterForm