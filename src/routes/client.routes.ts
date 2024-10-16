import { Router } from 'express';
import { ClientController } from '../controllers/client.controller';
import { ClientService } from '../services/client.service';
import { ClientPostgresRepository } from '../repositories/client.postgres.repository';

const router = Router();
const clientRepository = new ClientPostgresRepository();
const clientService = new ClientService( clientRepository );
const clientController = new ClientController( clientService );

// Rutas para manejar clientes
router.post('/clients', clientController.create.bind(clientController));        
router.get('/clients/:id', clientController.findById.bind(clientController));   
router.put('/clients/:id', clientController.update.bind(clientController));     
router.delete('/clients/:id', clientController.delete.bind(clientController)); 

export default router;
