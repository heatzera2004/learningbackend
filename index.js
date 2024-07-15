const express = require('express')
const app = express()

require('dotenv').config()


app.get('/' , (req,res) => {
    res.send("HELLO WORLD")
})

app.listen(process.env.PORT , () => {
    console.log(`Server running on PORT : ${process.env.PORT}`)
})