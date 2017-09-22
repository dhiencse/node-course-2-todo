var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  }
});

// var otherUser = new User({
//   email: 'dhiencse'
// });

// otherUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save otherUser');
// });

module.exports = {User};