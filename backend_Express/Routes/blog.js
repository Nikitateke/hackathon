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

router.get('/allblog',(request,response)=>{
    const statement = "select BLOG.id,BLOG.title,BLOG.createdtime,CATEGORY.title as ctitle,USER.name as uname from BLOG,CATEGORY,USER where BLOG.userid=USER.id and BLOG.categoryid=CATEGORY.id;"
    
    db.pool.execute(statement,(error,result)=>{
        response.send(utils.createResponse(error,result))
    })
})

router.get('/myblog',(request,response)=>{
    
    const statement = "select BLOG.id,BLOG.title,BLOG.createdtime,CATEGORY.title as ctitle,USER.name as uname from BLOG,CATEGORY,USER where BLOG.userid=USER.id and BLOG.categoryid=CATEGORY.id and USER.id=?;"
    
    db.pool.execute(statement,[request.userid],(error,result)=>{
        response.send(utils.createResponse(error,result))
    })
})

router.get('/editbtn',(request,response)=>{
    
    
    const statement = 'select name from USER where id=?;'

    db.pool.execute(statement,[request.userid],(error,result)=>{
        response.send(utils.createResponse(error,result))
    })

})

module.exports = router


