const express = require('express')
const router= express.Router()

router.get('/',(request,response)=>{
    response.send("This is second page")
})
//router.get('/:id',(request,response)=>{
//    response.send("Passed value is" + request.params.id)
//})
router.get('/:id/:name',(request,response)=>{
  response.send("Passed value is" + request.params.id + "is name" + request.params.name)
})
//router.get('/:id(0-9){3}/:name',(request,response)=>{
//  response.send("Passed value is" + request.params.id )
//})

module.exports=router