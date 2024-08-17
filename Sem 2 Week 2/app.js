const express = require('express');
const app = express();
const connection = require('./BACKEND/config/DBconnection');
const admin = require('./BACKEND/routes/adminRoutes');
connection();//Database connection

app.use(express.json());

app.get('/',(req, res)=> {
    console.log("HOME");
    res.send("Hello world!") // Home

})

app.use('/auth', admin) //admin login


app.listen(3000, ()=>{
    console.log("Server is running ...")
})