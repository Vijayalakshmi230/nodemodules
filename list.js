const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.send("List of Users")
})

router.get('/:id', (request, response) => {
  response.send(`the user page with id ${request.params.id}`)
})
const userid =[
    {
        name:'one'
    },
    {
        name:'two'
    },
    {
        name:'three'
    }
]
router.param('userid',(request,response,next,id)=>{
    request.user=users[userid]
    next()
})

//router.param('id',(request,response,next,id)=>{
//    console.log(id)
//    next()
//})


module.exports = router