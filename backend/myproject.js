const express= require('express')
const server = express()
const jwt = require('jsonwebtoken')
const secret = require('./Routes/config')
const util = require('./util')

const cors = require('cors')

server.use(cors())
server.use(express.json())

server.use((request,response,next)=>{
 if(request.url == '/user/register' ||
    request.url == '/user/login'  || 
    request.url == '/category' ||
    request.url == '/category/addcategory') {
    next()
 }
 else{
    const token = request.headers.token
    if(!token || token.length == 0){
        response.send(util.createError('missing token'))
    }
    try{
        const payload = jwt.verify(token,secret.secret)
        const {id} = payload 
        request.userid = id;
        next()
    }catch(ex){
        response.send(util.createError('invalid token'))
 }    
 }
})



const userRouter = require('./Routes/user')
const categoryRouter = require('./Routes/category')
const blogRouter = require('./Routes/blog')
// const propertyRouter = require('./Routes/property')
// const categoryRouter = require('./Routes/category')
 
server.use('/user',userRouter)
server.use('/category',categoryRouter)
server.use('/blog',blogRouter)
// server.use('/property',propertyRouter)
// server.use('/category',categoryRouter)

server.listen(4000,'0.0.0.0',()=>{
    console.log("Server is connected to port 4000")
})