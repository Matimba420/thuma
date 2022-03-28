const express = require('express');
const http = require ('http');
const bodyParser=require ('body-parser')


const api = require('./routes/api');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/',api);

const port = process.env.PORT ||'4304';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`THUMA_MINA:${port}`));