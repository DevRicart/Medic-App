import mongoose from 'mongoose'

const Schema = mongoose.Schema

const doctorSchema = new Schema({
  doctorId: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  registration: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const doctor = mongoose.model('Doctor', doctorSchema)

export default doctor
