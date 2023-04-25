const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.send("List of Users")
})

router.get('/:id', (request, response) => {
    response.send(`the user page with id ${request.params.id}`)
})
router.param('id', (request, response, next, id) => {
    console.log(id)
    next()
})

module.exports = router