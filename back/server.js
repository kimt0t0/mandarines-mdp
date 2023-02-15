const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const normalizePort = val => {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

const port = normalizePort(process.env.PORT || '3000')

const app = express()

app.use(helmet())
app.use(cors())

const connect = require('./src/data/helpers/db')
connect()

try {
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use('/', require('./routes'))
} catch (e) {
  console.error('Erreur: ' + JSON.stringify(e))
}

try {
  app.listen(port, () => {
    console.log(`¤¤¤ LISTENING APP ON PORT ${port} ¤¤¤`)
  })
} catch (e) {
  console.error('Erreur: ' + JSON.stringify(e))
}
