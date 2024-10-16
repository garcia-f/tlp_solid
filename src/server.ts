import express, { Application} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from 'helmet';

// import { connectionDB } from './config/connectionDB';
import { envs } from "./environments/environments";
import vehicleRoutes from "./routes/vehicle.routes";
import clientRoutes from "./routes/client.routes";





class Server {

    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = envs.PORT;

        // this.dbConnect();
        this.middlewares();
        this.routes();
    }

    // async dbConnect(): Promise<void> {
    //     await connectionDB();
    // }


    middlewares(): void {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use('/api', vehicleRoutes); // Prefijo para las rutas de vehículos
        this.app.use('/api', clientRoutes);  // Prefijo para las rutas de clientes
    }

    listen(): void {
        this.app.listen( this.port, ()=> {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}


export default Server;
