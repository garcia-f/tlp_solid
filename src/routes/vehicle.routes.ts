import { Router } from 'express';
import { VehicleController } from '../controllers/vehicle.controller';
import { VehicleService } from '../services/vehicle.service';
import { VehiclePostgresRepository } from '../repositories/vehicle.postgres.repository';

const router = Router();
const vehicleRepository = new VehiclePostgresRepository();
const vehicleService = new VehicleService( vehicleRepository );
const vehicleController = new VehicleController( vehicleService );


router.post('/vehicles', (req, res) => vehicleController.create(req, res));        
router.get('/vehicles/:id', (req, res) => vehicleController.findById(req, res));   
router.put('/vehicles/:id', (req, res) => vehicleController.update(req, res));     
router.delete('/vehicles/:id', (req, res) => vehicleController.delete(req, res));  

export default router;
