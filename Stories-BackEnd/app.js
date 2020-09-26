const mongoose = require('mongoose');
const express = require('express');
const config = require('config');
const helmet = require('helmet');
const conmpression = require('compression');
const users= require('./routes/users');
const posts = require('./routes/post');
const auth = require('./routes/auth');
const app = express();
var cors = require('cors')


app.use(function(req, res, next) {  
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});  

mongoose.connect(config.get('mongodburl'))
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error(err));

if(!config.get('jwtprivatekey')){
  console.log('jwt private key is not defined or undefined');
  process.exit(1);
}
app.use(helmet());
app.use(conmpression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/users',users);
app.use('/api/posts',posts);
app.use('/api/auth',auth);





  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));