const express = require('express')

const app = express()  
const secPage = require('./secPage.js')
const routerPage = require('./routerPage.js')
const list = require('./list.js')
const pop = require('./pop.js')
app.get('/',(request,response)=>{
    //response.send("Hello World")
    //response.sendStatus(500)
    //response.status(500).send("Boring Server")
    //response.status(500).json(
    //   {
    //      "errorMessage":"Boring Server"
    //  }
   // )
   response.send("Get Router to Home Page")
})
app.use('/secPage',secPage)
app.use('/routerPage',routerPage)
app.use('/list',list)
app.use('/pop',pop)
app.listen(3500)