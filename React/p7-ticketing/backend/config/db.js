const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  name: {type: String, require: [true, 'Add a name']},
  email: {type: String, require: [true, 'Add a email'], unique: true},
  email: {type: String, require: true},
  isAdmin: {type: Boolean, default: false},
},
{
  timeStamp:true
}
)