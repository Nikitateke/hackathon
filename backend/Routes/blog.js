const express = require('express')
const router = express.Router()
const db = require('../db') 
const utils = require('../util')



router.post('/addblog',(request,response)=>{

    const {title,contents,categoryid} = request.body
    

    const statement = 'insert into BLOG(title,contents,categoryid,userid) values(?,?,?,?);'

    db.pool.execute(statement,[title,contents,categoryid,request.userid],(error,result)=>{
        response.send(utils.createResponse(error,result))
    })
})

module.exports = router


