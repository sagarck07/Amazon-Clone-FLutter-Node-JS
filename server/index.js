const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = 3000;
const authRouter = require("./routes/auth")
const db = 'mongodb://127.0.0.1:27017/amazon-clone_flutter'

app.use(express.json())
app.use(authRouter)

mongoose
    .connect(db)
    .then(() => {
        console.log("connection Successful")
    }).catch((e) => {
        console.log(e)
    })

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at ${PORT}`)
})