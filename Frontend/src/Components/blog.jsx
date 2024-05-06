import axios from "axios"
import { useEffect, useState } from "react"

function Blog({props}){
    
    
    let a=1
    const {id, title,ctitle,createdtime,uname} = props
    //console.log("t=",t)
    useEffect(()=>{
       editbtn()
   
    },[])

    const editbtn = async()=>{
        const token = sessionStorage.getItem('token')


        const response = await axios.get("http://localhost:4000/blog/editbtn",{headers:{token}})
        const result = response.data
        // console.log('result: ',response)
        if(result.status === 'success'){
            a=a+1
            
            console.log("name=",sessionStorage.getItem('name'))
            console.log("uname=",uname)

            if(sessionStorage.getItem('name')== uname){
                console.log("sssssss")
                a=1
            }else{
                a=0
            }

        }else{

        }
        

    }
    

    if(a==1){
        console.log("=",a)
        return(
            <tr align='center'>
                <td>{id}</td>
                <td>{title}</td>
                <td>{ctitle}</td>
                <td>{createdtime}</td>
                <td>{uname}</td>
                <td className=""><button className="btn btn-warning">edit</button><button className="btn btn-danger">delete </button></td>
                
            </tr>
        )
    }else{
        console.log("+",a)
        return(
            <tr align='center'>
                <td>{id}</td>
                <td>{title}</td>
                <td>{ctitle}</td>
                <td>{createdtime}</td>
                <td>{uname}</td>
                
            </tr>
        )
    }
    
// return(
//     <tr align='center'>
//         <td>{id}</td>
//         <td>{title}</td>
//         <td>{ctitle}</td>
//         <td>{createdtime}</td>
//         <td>{uname}</td>
//         <td className=""><button className="btn btn-warning">edit</button><button className="btn btn-danger">delete </button></td>
        
//     </tr>
// )
}

export default Blog