const express = require('express')
const router= express.Router()

let listOfServices=[
    {
        "id":1,
        "Name":"Webdevelpoment",
    },
    {
        "id":2,
        "Name":"WebApplication",
    },
    {
        "id":3,
        "Name":"MobileApplication",
    },
    router.get('/',(request,response)=>{
        response.send("Enter the Number")
    })
    
]


router.get('/:id', (request,response)=>{
    const routerId = Number(request.params.id)
    const getRouter = listOfServices.find((router) => router.id === routerId)
    if(!getRouter)
    {
        response.status(500).send ("Expected service not found")
        console.log(request.params,id);
    }
    else
    {
        response.json(getRouter)
    }
})


module.exports=router