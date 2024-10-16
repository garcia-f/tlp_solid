import { Request, Response } from 'express';
import { VehicleService } from '../services/vehicle.service';

export class VehicleController {
    constructor(private vehicleService: VehicleService) {}

    async create(req: Request, res: Response): Promise<void> {
        const vehicle = req.body;
        await this.vehicleService.createVehicle(vehicle);
        res.status(201).send('Vehicle created');
    }

    async findById(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const vehicle = await this.vehicleService.findVehicleById(id);
        if (vehicle) {
            res.status(200).json(vehicle);
        } else {
            res.status(404).send('Vehicle not found');
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const vehicle = req.body;
        await this.vehicleService.updateVehicle(id, vehicle);
        res.status(200).send('Vehicle updated');
    }

    async delete(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        await this.vehicleService.deleteVehicle(id);
        res.status(200).send('Vehicle deleted');
    }
}
