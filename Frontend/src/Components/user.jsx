function User({props}){
   // debugger
    console.log(props)
    const{ name, address, email, password} = props
    console.log(name+" "+address)
return <tr>
    <td>{name}</td>
    <td>{address}</td>
    <td>{email}</td>
    <td>{password}</td>
</tr>
}
export default User