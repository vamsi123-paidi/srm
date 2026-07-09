const express = require('express')
const { addStudent, updateStudent, deleteStudent ,addUser} = require('../controllers/postControllers')
const router = express.Router()

router.post('students',addStudent)
router.put('students/:id',updateStudent)
router.delete('students/:id',deleteStudent)
router.post('/users',addUser)
module.exports = router
