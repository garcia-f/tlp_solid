import { IVehicleRepository } from '../interfaces/vehicle.repository.interface';
import { IVehicle } from '../models/vehicle.model';

export class VehicleMongoRepository implements IVehicleRepository {
    private vehicles: IVehicle[] = []; 

    async create(vehicle: IVehicle): Promise<void> {
        this.vehicles.push(vehicle);
        console.log('Vehicle created:', vehicle);
    }

    async findById(id: string): Promise<IVehicle | null> {
        const vehicle = this.vehicles.find(vehicle => vehicle.id === id);
        return vehicle || null;
    }

    async update(id: string, vehicle: IVehicle): Promise<void> {
        const index = this.vehicles.findIndex(v => v.id === id);
        if (index !== -1) {
            this.vehicles[index] = vehicle;
            console.log('Vehicle updated:', vehicle);
        }
    }

    async delete(id: string): Promise<void> {
        this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
        console.log('Vehicle deleted:', id);
    }
}
