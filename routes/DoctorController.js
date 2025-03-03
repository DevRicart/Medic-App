import express from 'express'
import bcrypt from 'bcrypt'
import DoctorService from '../services/DoctorService.js'
import { v4 as uuidv4 } from 'uuid'

let router = express.Router()

router.get('/doctors', async (req, res) => {
  try {
    const doctors = await DoctorService.getAllDoctors()
    res.send(doctors)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.get('/getDoctor/:id', async (req, res) => {
  const { id } = req.params
  try {
    const doctor = await DoctorService.getDoctor(id)
    res.send(doctor)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.post('/postDoctor', async function (req, res) {
  const { name, login, password, specialty, registration, email, phone } =
    req.body
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const doctor = await DoctorService.saveDoctor({
      doctorId: uuidv4(),
      name,
      login,
      password: hashedPassword,
      specialty,
      registration,
      email,
      phone
    })
    res.status(201).send(doctor)
  } catch (error) {
    console.error(error)
    res.status(500).send('Falha ao registrar médico' + error)
  }
})

router.put('/doctors/:id', async (req, res) => {
  const { id } = req.params
  const { name, login, password, specialty, registration, email, phone } =
    req.body

  try {
    const doctor = await DoctorService.updateDoctor(id, {
      name,
      login,
      password,
      specialty,
      registration,
      email,
      phone
    })
    res.send(doctor)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.delete('/doctors/:id', async (req, res) => {
  const { id } = req.params

  try {
    const doctor = await DoctorService.deleteDoctor(id)
    res.send(doctor)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

export default router
