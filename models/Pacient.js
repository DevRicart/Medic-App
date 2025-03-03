import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pacientSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

const pacient = mongoose.model('Pacient', pacientSchema)

export default pacient
