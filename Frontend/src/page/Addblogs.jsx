import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { CategoryDropdown } from "../Components/category"
import { toast } from "react-toastify"



function Addblog(){

    const [title,setTitle]= useState('')
    const [categorylist ,setCategorylist]= useState([])
    const[categoryid,setCategoryId] = useState()
    const[contents, setContent] = useState('')

    // const getCategoryid = async()=>{
    //     const body={
    //         category
    //     }
    //     const response  = await axios.post('http://localhost:4000/category/getcategoryid',body)
    //     const result = response.data
    //     if(result.status === 'success'){
    //         setCategoryId(result.result[0].id)
    //     }else{
    //         alert('error: ',error)
    //     }
    // }

    const getcategories = async () => {

        const response = await axios.get('http://localhost:4000/category')
        const result = response.data
        if (result.status == 'success') {
            setCategorylist(result.result)
        }
    }
    
    useEffect(() => {
        getcategories()
      }, [])

    const addBlog = async ()=>{

        if(title == '' || contents == ''){
            toast.error('Empty feilds')
        }else{

            const token = sessionStorage.getItem('token')
            const body={
                title,contents,categoryid
            }
            const response  = await axios.post('http://localhost:4000/blog/addblog',body ,{headers:{token}})
            const result = response.data
            if(result.status === 'success'){
                toast.success('New Blog Added')
            }else{
                alert('error:' + result.error)
            }
      }         
    }


    return (
        <div className="conatiner mt-5 ms-4">
            <div>
               <label htmlFor="" className="mt-2">Title</label>
               <input type="text" className="form-control mb-3" onChange={(e)=>{
                setTitle(e.target.value)
               }}/>
            </div>
            <div>
                <label htmlFor="">Category</label>
                <select className='btn  ms-3'name="" style={{border:'1px solid black'}} id="" onChange={(e)=>{setCategoryId(e.target.value)}}>
                {
                    categorylist.map((category)=>{
                        return <CategoryDropdown id ={category.id} title={category.title}/>
                    })
                }
                </select>
            </div>
            <div>
                <textarea className='mt-3'name="" id="" cols="50" rows="10" placeholder="Bolg content..." onChange={(e)=>{setContent(e.target.value)}}></textarea>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={addBlog}>Add Blog</button>
            </div>            
        </div>
    )
}

export default Addblog