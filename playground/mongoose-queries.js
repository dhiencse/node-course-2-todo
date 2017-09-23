const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59c5de530787900f40ee2288';

if(!ObjectId.isValid(id)) {
  console.log('Id not valid');
} else {
  Todo.findById(id).then((todo) => {
  console.log("Todo by id ", todo);
});
}
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos ",todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo ",todo);
// });


