const express = require('express');
const app = express();
const student = require('./model/students');
require('./db/connection');
const studentRouter = require('./routers/routing');
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(studentRouter);

app.listen(port,()=>{
    console.log(`Listening at port: ${port}`);
});