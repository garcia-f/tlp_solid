import { Request, Response } from 'express';
import { ClientService } from '../services/client.service';

export class ClientController {
    constructor(private clientService: ClientService) {}

    async create(req: Request, res: Response): Promise<void> {
        const client = req.body;
        await this.clientService.createClient(client);
        res.status(201).send('Client created');
    }

    async findById(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const client = await this.clientService.findClientById(id);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).send('Client not found');
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const client = req.body;
        await this.clientService.updateClient(id, client);
        res.status(200).send('Client updated');
    }

    async delete(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        await this.clientService.deleteClient(id);
        res.status(200).send('Client deleted');
    }
}
