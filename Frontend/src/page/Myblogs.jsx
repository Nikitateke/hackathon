import axios from "axios"
import { useEffect, useState } from "react"
import Blog from "../Components/blog";

function MyBlog() {

    const [myblogs, setMyblog] = useState([]);

    
    useEffect(() => {
        
        myblog()
      }, [])

    const myblog = async () => {
        const token = sessionStorage.getItem('token')
        const response = await axios.get("http://localhost:4000/blog/myblog",{headers:{token}})
        const result = response.data
        console.log("aaaaaaaaaaaaaaaaaaaaaaa",response)
        if (result.status == 'success') {
            
            setMyblog(result.result)
        }
    }

    return (
        <div>
            
            <div className="">
                <table className="table table-striped table-bordered" >
                    <thead align="center">
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            myblogs.map((myblog)=>{
                                return <Blog props={myblog} />
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default MyBlog 