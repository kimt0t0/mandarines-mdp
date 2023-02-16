const { createUser } = require('../../controllers/usersController')
const router = require('express').Router()

router.route('/')

  .post(async (req, res) => {
    try {
      const userCreated = await createUser(req.body)
      console.log('created user: ', userCreated)
      return res.status(201).json({ message: 'Utilisateur créé' })
    } catch (e) {
      return res.status(500).send(e)
    }
  })

  module.exports = router