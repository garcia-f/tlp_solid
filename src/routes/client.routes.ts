import { Router } from 'express';
import { ClientController } from '../controllers/client.controller';
import { ClientService } from '../services/client.service';
import { ClientPostgresRepository } from '../repositories/client.postgres.repository';

const router = Router();
const clientRepository = new ClientPostgresRepository();
const clientService = new ClientService( clientRepository );
const clientController = new ClientController( clientService );

// Rutas para manejar clientes
router.post('/clients', (req, res) => clientController.create(req, res));        
router.get('/clients/:id', (req, res) => clientController.findById(req, res));   
router.put('/clients/:id', (req, res) => clientController.update(req, res));     
router.delete('/clients/:id', (req, res) => clientController.delete(req, res)); 

export default router;
