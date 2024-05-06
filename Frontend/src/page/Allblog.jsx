import axios from "axios"
import { useEffect, useState } from "react"
import Blog from "../Components/blog";

function AllBlog() {

    const [allblogs, setAllblog] = useState([]);

    
    useEffect(() => {
        
        allblog()
      }, [])

    const allblog = async () => {
        const token = sessionStorage.getItem('token')
        const response = await axios.get("http://localhost:4000/blog/allblog",{headers:{token}})
        const result = response.data
        console.log("aaaaaaaaaaaaaaaaaaaaaaa",response)
        if (result.status == 'success') {
            
            setAllblog(result.result)
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
                            allblogs.map((allblog)=>{
                                console.log(allblog)
                                return <Blog props={allblog} />
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default AllBlog 