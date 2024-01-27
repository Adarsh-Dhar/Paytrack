const express = require('express')
const router = express.Router()
const {getUser,createUser,deleteUser,updateUser} = require('../controllers/users')

router.route('/').post(createUser) 
router.route('/id').get(getUser).patch(updateUser).delete(deleteUser)



module.exports = router

