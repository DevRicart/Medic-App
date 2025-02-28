import { express } from "express";
import appointmentService from "../services/AppointmentService";

let router = express.Router();

router.get("/appointments", async (req, res) => {
    try {
        const appointments = await appointmentService.getAllAppointments();
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get("/getAppointment/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const appointment = await appointmentService.getAppointment(id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res
    }
});



export default router();