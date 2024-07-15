const express = require('express')
const app = express()

require('dotenv').config()


app.get('/' , (req,res) => {
    res.send("HELLO WORLD")
})

app.get('/datapush' , (req,res) => {
    res.json({
        message: "FIRST DATA PUSH"
    })
})

app.listen(process.env.PORT , () => {
    console.log(`Server running on PORT : ${process.env.PORT}`)
})