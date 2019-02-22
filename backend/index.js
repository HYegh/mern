const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();

const dbRoute = "mongodb://hayk:admin222@ds233531.mlab.com:33531/todo";

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// router.post('/checkedData', (req, res) => {
//   Data.findOneAndUpdate({
//       _id: req.body.id
//       },
//       { $set: { completed: req.body.completed }
//   }, {runValidators: true}, function(err, newTodo) {
//       if (err) {
//         res.send('error');
//       } else {
//         res.json(newTodo)
//       }
//   });
// })

// router.post('/deleteData', (req, res) => {
//   Data.findOneAndRemove({
//       _id: req.body.id
//   }, function(err, item) {
//       if(err) {
//         res.send('error removing')
//       } else {
//         res.json(item)
//       }
//   });
// });

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));