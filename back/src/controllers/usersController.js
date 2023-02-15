const User = require('../data/models/User')

const createUser = async (user) => {
  if (!user.email || !user.password) {
    throw new Error('Données manquantes: pass ou mail')
  }

  const _user = new User({
    firstName: user.firstName,
    lastName: user.lastName
  })

  const savedUser = await _user.save()
  const savedUserObject = savedUser.toObject()
  delete savedUserObject.password
  return savedUserObject
}

module.exports = {
  createUser
}
