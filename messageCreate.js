const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/groupstudy');

const Schema = mongoose.Schema;

const messageSchema = new Schema ({
  message: String,
  created: Date
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
