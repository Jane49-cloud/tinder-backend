const {createCard} = require( '../handlers/handler.js')
const express = require('express')
const router = express.Router()


router.route('/tindercards').post(createCard)


module.exports = router