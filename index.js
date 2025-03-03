import express from 'express'
import pkg from 'body-parser'
import appointmentRoutes from './routes/AppointmentController.js'
import doctorRoutes from './routes/DoctorController.js'
import pacientRoutes from './routes/PacientController.js'
import prescriptionRoutes from './routes/PrescriptionController.js'
import connectDB from './database/database.js' // Importando a conexão correta

const app = express()
const { json, urlencoded } = pkg

// Conectar ao banco de dados apenas uma vez
connectDB()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/api', appointmentRoutes)
app.use('/api', doctorRoutes)
app.use('/api', pacientRoutes)
app.use('/api', prescriptionRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
