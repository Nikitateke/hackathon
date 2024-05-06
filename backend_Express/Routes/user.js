const express = require('express')
const router = express.Router()
const db = require('../db')
const crypto = require('crypto-js')
const utils = require('../util')
const jwt = require('jsonwebtoken')
const secret = require('./config')
const mail = require('../mail')


router.post('/login',(request,response)=>{
    debugger;
    const a =[];
    const statement = `select id,name from USER where password = ? and email = ?;`
    const {password,email} = request.body
    const encPassword = String(crypto.SHA256(password))
     
    db.pool.execute(statement,[encPassword,email],(error,result)=>{        
       if(result.length>0){
        console.log(result)
        const payload  ={id: result[0].id} 
        const token = jwt.sign(payload,secret.secret)
        const userdata = {
            token : token,
            name : result[0].name,
        }
        response.send(utils.createResult(userdata))
       }else{
        response.send(utils.createError('error'))
       }
            console.log(result)
    })
})

router.post('/register',(request,response)=>{
    console.log("body:",request.body)
    const statement = `insert into USER(name, email,password,phoneno) values(?,?,?,?);`
    const {name,email,password, phoneno} = request.body
    const encPassword = String(crypto.SHA256(password))

    db.pool.execute(statement,[name,email,encPassword,phoneno],(error,result)=>{
        response.send(utils.createResponse(error,result))
    })
})


module.exports = router