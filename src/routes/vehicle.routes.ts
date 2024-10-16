import { Router } from 'express';
import { VehicleController } from '../controllers/vehicle.controller';
import { VehicleService } from '../services/vehicle.service';
import { VehicleMongoRepository } from '../repositories/vehicle.repository.interface';

const router = Router();
const vehicleRepository = new VehicleMongoRepository();
const vehicleService = new VehicleService( vehicleRepository );
const vehicleController = new VehicleController( vehicleService );

// Rutas para manejar vehículos
router.post('/vehicles', vehicleController.create.bind(vehicleController));        
router.get('/vehicles/:id', vehicleController.findById.bind(vehicleController));   
router.put('/vehicles/:id', vehicleController.update.bind(vehicleController));     
router.delete('/vehicles/:id', vehicleController.delete.bind(vehicleController));  

export default router;
