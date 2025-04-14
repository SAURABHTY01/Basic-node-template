const express = require('express')
const app = express()

app.get("/", async (req, res) => {
    console.log("app is running")
    res.send("app is running")
})

app.listen(4040, () => console.log('server is running on 4040'))