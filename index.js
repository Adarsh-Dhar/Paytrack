const express = require('express')
const app = express()
const users = require('./routes/users.js')


app.get("/hello",(req,res)=>{
    res.send("fintech app")
})

app.use(express.json())

app.use('/api/v1/users',users)



const port = 5000;

app.listen(port,console.log(`server is listening to port ${port}`));
