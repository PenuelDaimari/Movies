import { Entity } from '@loopback/repository';
import { Role } from './role.model';
export declare class User extends Entity {
    email: string;
    id?: string;
    password: string;
    username: string;
    userRole: Role[];
    subscriptionId: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export type UserWithRelations = User & UserRelations;
