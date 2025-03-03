import express from 'express'
import appointmentController from './AppointmentController.js'
import DoctorController from './DoctorController.js'
import pacientController from './PacientController.js'
import prescriptionController from './PrescriptionController.js'

let router = express.Router()

router.get('/', function (req, res) {
  console.log('hi')
  res.status(200).json({ message: 'Hello World' })
})

router.use('/', appointmentController)
router.use('/', DoctorController)
router.use('/', pacientController)
router.use('/', prescriptionController)

export default router
