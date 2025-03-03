import mongoose from 'mongoose'

const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  doctorId: {
    type: String,
    required: true
  },
  pacientId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment
