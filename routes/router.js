import { express } from 'express';
import appointmentController from '../controllers/appointmentController.js';
import doctorController from '../controllers/doctorController.js';
import patientController from '../controllers/patientController.js';
import prescriptionController from '../controllers/prescriptionController.js';

let router = express.Router();

router.get(
    '/', function (req, res) {
        console.log('hi');
        res.status(200).json( message, 'Hello World'); 
    }
);

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", patientController);
router.use("/", prescriptionController);

export default router;