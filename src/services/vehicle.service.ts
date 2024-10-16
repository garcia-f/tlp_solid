import { IVehicleRepository } from '../interfaces/vehicle.repository.interface';
import { IVehicle } from '../models/vehicle.model';

export class VehicleService {
    constructor(private vehicleRepository: IVehicleRepository) {}

    async createVehicle(vehicle: IVehicle): Promise<void> {
        await this.vehicleRepository.create(vehicle);
    }

    async findVehicleById(id: string): Promise<IVehicle | null> {
        return await this.vehicleRepository.findById(id);
    }

    async updateVehicle(id: string, vehicle: IVehicle): Promise<void> {
        await this.vehicleRepository.update(id, vehicle);
    }

    async deleteVehicle(id: string): Promise<void> {
        await this.vehicleRepository.delete(id);
    }

    
    applyDiscount(vehicle: IVehicle, discount: number): IVehicle {
        vehicle.precio -= discount;
        return vehicle;
    }
}
