import { IClientRepository } from '../interfaces/client.repository.interface';
import { IClient } from '../models/client.model';

export class ClientPostgresRepository implements IClientRepository {
    private clients: IClient[] = []; 

    async create(client: IClient): Promise<void> {
        this.clients.push(client);
        console.log('Client created (Postgres):', client);
    }

    async findById(id: string): Promise<IClient | null> {
        const client = this.clients.find(client => client.id === id);
        console.log('Client found (Postgres):', client);
        return client || null;
    }

    async update(id: string, client: IClient): Promise<void> {
        const index = this.clients.findIndex(c => c.id === id);
        if (index !== -1) {
            this.clients[index] = client;
            console.log('Client updated (Postgres):', client);
        }

        console.log('Client not found (Postgres):', id);
    }

    async delete(id: string): Promise<void> {
        this.clients = this.clients.filter(client => client.id !== id);
        console.log('Client deleted (Postgres):', id);
    }
}
