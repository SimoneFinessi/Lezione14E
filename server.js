const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log("hi")
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000)