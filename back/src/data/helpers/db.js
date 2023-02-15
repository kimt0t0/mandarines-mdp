const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
  console.log('Tentative de connexion à Mongo')
  const username = process.env.MONGO_USER
  const password = process.env.MONGO_PASSWORD
  const host = process.env.MONGO_HOST
  console.log('Identifiants: ', username, ' ', password, ' ', host)

  try {
    await mongoose.connect(`mongodb+srv://${username}:${password}@${host}`)
    console.log('¤¤¤ DATABASE CONNECTED ¤¤¤')
  } catch (e) {
    console.error('Erreur: ' + JSON.stringify(e))
  }
}

module.exports = connect
