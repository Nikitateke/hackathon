function Category({props}){

    const {id, title} = props
return(
    <tr align='center'>
        <td>{id}</td>
        <td>{title}</td>
        <td> <button className="btn btn-warning">edit</button> <button className="btn btn-danger">delete</button></td>
    </tr>
)
}

function CategoryDropdown({id, title}){

return(
   <option value={id}>{title}</option>
)
}

export {Category, CategoryDropdown} 