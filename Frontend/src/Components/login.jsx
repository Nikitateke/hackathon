import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"



function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

    const submit = async () => {
        
        const body={
            email,
            password
        }
        const response = await axios.post('http://localhost:4000/user/login',body)
        const result = response.data
        if (result.status == 'success') {
            console.log(result)
            const { token, name, id} = result.result 
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('name', name)
            sessionStorage.setItem('id',id)
            toast.success('Login Successful')
            navigate('/home')
        }
        else {
            alert('Invalid credentials')
        }
    }
    
    const onCancel = () => {
        navigate('/register')
    }

    return (

        <div className="container ">
            <h3 className="mt-5">User Login</h3>
            <div className="col-3"></div>
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="" >Email Id </label>
                    <input type="text" className="form-control" onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" >Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{
                        setPass(e.target.value)
                    }}/>
                </div>
                <div className="mb-3">
                    <p>New User ?<Link to='/register'>Register here</Link> </p>
                    <button className="btn btn-success" onClick={submit}> Login</button>
                    <button className="btn btn-danger ms-3" onClick={onCancel}>Cancel </button>
                </div>
            </div>
            <div className="col-3"> </div>
        </div>
    )
}

export default Login