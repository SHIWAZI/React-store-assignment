const express = require('express');
 const bodyParser = require('body-parser');
const mongoose = require('mongoose');
 const app = express();

// connect to mongodb
const dbURI='mongodb+srv://shiwazi:00007777@nodels.xbyly.mongodb.net/reactStore?retryWrites=true&w=majority';
 mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.use(express.static('public'));

app.use(bodyParser.json());

 app.use('/api', require('./routes/api'));

app.use(function(err, req, res, next){
    console.log(err); 
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
