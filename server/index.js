const mongoose = require('mongoose');
const express = require('express');
const app = express()
const PORT = 3000
const router = require("./routers/productsrouter")
const cors = require("cors")

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://elcansaazmp202:bx1.2005@cluster0.83ybn.mongodb.net/exam?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    app.listen(PORT, console.log(`http://localhost:${PORT}`))
})

app.use("/api/products", router)