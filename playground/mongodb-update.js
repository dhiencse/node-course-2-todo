// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log("Unable to connect to MongoDb Server");
  }

  console.log("Connected to MongoDb Server");

  //Update 
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59a2879e33e1915bc59b019b')
  // }, {
  //   $set: {
  //     text: 'Walk with dog & cat',
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59a39cf733e1915bc59b13e3')
  }, {
    $set: {
      name: 'dhiencse'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});