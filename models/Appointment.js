import { mongo, Mongoose } from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    doctorId: {
        type: String,
        required: true
    },
    patientId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const appointment = mongoose.model('Appointment', appointmentSchema);

export default appointment;