const express = require('express')
const router = express.Router()
const db = require('../db') 
const utils = require('../util')

router.get('/',(request,response)=>{
  const statement = `select id, title from CATEGORY;`
  db.pool.execute(statement, (error,result)=>{
    response.send(utils.createResponse(error,result))
  })
})

router.post('/addcategory', (request,response)=>{
    const query = `insert into CATEGORY (title) values(?);`
    const {title} = request.body
    db.pool.execute(query,[title],(error,result)=>{
        response.send(utils.createResponse(error,result))
    })
}) 

router.post('/getcategoryid',(request,response)=>{
  const {category} = request.body
  const statement = 'select id from CATEGORY where title=?;'

  db.pool.execute(statement,[category],(error,result)=>{
      response.send(utils.createResponse(error,result))
  })
})

module.exports = router