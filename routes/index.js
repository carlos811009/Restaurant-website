const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const user = require('./modules/user')
const auth = require('./modules/auth')

//因為掛載的是一個物件函式所以{}
const { authenticator } = require('../middleware/auth')


router.use('/restaurants', restaurants)
router.use('/auth', auth)
router.use('/user', user)
router.use('/', authenticator, home)

module.exports = router