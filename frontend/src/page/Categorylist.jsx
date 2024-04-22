import User from "../Components/user"
import axios from 'axios'
import { useEffect, useState } from "react"
import { Category } from "../Components/category"
import { toast } from "react-toastify"

function Categorylist() {

    const [categories, setCategory] = useState([])
    const [title,setNewcategory] = useState('')

    const getcategories = async () => {

        const response = await axios.get('http://localhost:4000/category')
        const result = response.data
        if (result.status == 'success') {
            setCategory(result.result)
        }
    }

    useEffect(() => {
        getcategories()
      }, [])

    const addCategory = async()=>{
        const body = {
            title,
        }
        const response = await axios.post('http://localhost:4000/category/addcategory', body)
        const result = response.data
        if(result.status == 'success')
        {
            toast.success('Category Added')
            getcategories()
        }
        else{
            toast.error('Cannot add new category')
        }
    }
    
    return (
        <div className="container">

            <label htmlFor="" className=" mt-5">Category</label>
            <input type="text" className="form-control bt-3" onChange={(e)=>{
                setNewcategory(e.target.value)
            }}/>

            <button className="btn btn-secondary mt-3" onClick={addCategory}>Add Category</button>
            <table className="table table-striped mt-5">
                <thead align ='center'>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        categories.map((category) => {
                            return <Category props={category}></Category>
                        })
                    }
                </tbody>
            </table>

        </div>
    )


}

export default Categorylist