const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', (req, res) => {
  if(!req.body.user) {
    return res.status(422).json({errors: {user: "can't be blank"}});
  }

  if(req.body.user && !req.body.user.email){
    return res.status(422).json({errors: {email: "can't be blank"}});
  }

  if(req.body.user && !req.body.user.password){
    return res.status(422).json({errors: {password: "can't be blank"}});
  }
  if(req.body.user && req.body.user.email === 'ruben.romero@guidesmiths.com' && req.body.user.password ==='123456') {
    res.status(200);
  } else {
    res.status(401);
  }
});

app.listen(3000, () => console.log('React Native Masmovil api listening on port 3000!'));

