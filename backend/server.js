const express = require("express");
const userRouter = require('./routes/routes');
const bodyParser = require("body-parser") 
const cors = require('cors');

const app = express();
const port = 4304;

var corsOption ={
    origin: 'http://localhost:4303',
}

app.use(cors(corsOption));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
a
app.get('/',(req,res)=>{
    res.send("Smart serve is working")
});

app.use("/api/",userRouter);

app.listen(port,() => {
    console.log(`server is listening to port ${port}`);
});