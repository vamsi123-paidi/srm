const express = require('express')
const { getAllStudents, getStudentById } = require('../controllers/getControllers')
const router = express.Router()


router.get("/students",getAllStudents)

router.get("/students/:id",getStudentById)
module.exports = router
