import { Count, Filter, Where } from '@loopback/repository';
import { User, Role } from '../models';
import { UserRepository } from '../repositories';
export declare class UserRoleController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: string, filter?: Filter<Role>): Promise<Role[]>;
    create(id: typeof User.prototype.id, role: Omit<Role, 'id'>): Promise<Role>;
    patch(id: string, role: Partial<Role>, where?: Where<Role>): Promise<Count>;
    delete(id: string, where?: Where<Role>): Promise<Count>;
}
