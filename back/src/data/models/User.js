const mongoose = require('mongoose')
const { Schema } = mongoose
// const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
//   pronouns: {
//     type: String
//   },
//   email: {
//     type: String,
//     unique: true,
//     match: /^[a-z0-9\-_.]+@[a-z]+\.[a-z]{2,3}$/
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   contactFirst: {
//     type: Object,
//     required: true
//   },
//   contactSecond: {
//     type: Object,
//     required: true
//   },
//   health: {
//     type: String
//   },
//   avatar: {
//     type: Object,
//     required: true
//   },
//   localisation: {
//     type: Object
//   },
//   userType: {
//     type: String,
//     required: true
//   },
//   created_at: {
//     type: Date,
//     required: true
//   },
//   last_connected: {
//     type: Date,
//     required: true
//   }
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema)
