const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const { specs, swaggerUi } = require('./swagger');
const server = express();
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/nusrerySystem";
mongoose.connect(url)
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
   });
server.use(express.json());
const teacherRoute = require('./Route/teacherRoute.js');
const childRoute = require('./Route/childRoute.js');
const classRoute = require('./Route/classRoute.js');

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); 
server.use(teacherRoute);
server.use(childRoute);
server.use(classRoute);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.use((request, response, next)=>{
response.status(404).json({message:"not found"});
});
server.use((error, req, res, next)=>{
  //console.error(error.stack);
  res.status(error.status||500).json({data:"error: "+error});
  next();
});
