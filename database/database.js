import mongoose from 'mongoose'

const dbUri = 'mongodb://localhost:27017/medicapp'

let isConnected = false

const connectDB = async () => {
  if (isConnected) {
    console.log('Já existe uma conexão ativa com o MongoDB.')
    return
  }

  try {
    await mongoose.connect(dbUri) // Removidas opções obsoletas
    isConnected = true
    console.log('Database connected successfully!')
  } catch (error) {
    console.error('Connection error:', error)
    process.exit(1)
  }
}

export default connectDB
