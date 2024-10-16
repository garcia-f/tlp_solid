import { IVehicle } from "../models/vehicle.model";



export interface IVehicleRepository {
    create(vehicle: IVehicle): Promise<void>;
    findById(id: string): Promise<IVehicle | null>;
    update(id: string, vehicle: IVehicle): Promise<void>;
    delete(id: string): Promise<void>;
}
