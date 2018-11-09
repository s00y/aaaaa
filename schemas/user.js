// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/auth', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('connected..!');
});

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
    // createdAt: new Date()
  });
  
var Users = mongoose.model('users', userSchema);



module.exports = Users;
