const mongoose = require("mongoose");

const adminCredential = new mongoose.Schema({
  loginid: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Admin Credential", adminCredential);
// {
//   "_id": {
//     "$oid": "65194c65043bbc35c99c5194"
//   },
//   "loginid": 123123,
//   "password": "112233",
//   "timestamp": {
//     "$date": "2023-10-01T10:39:33.921Z"
//   },
//   "__v": 0
// }
