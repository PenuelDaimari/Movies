import { Entity } from '@loopback/repository';
export declare class UserRole extends Entity {
    id?: string;
    roleId?: string;
    constructor(data?: Partial<UserRole>);
}
export interface UserRoleRelations {
}
export type UserRoleWithRelations = UserRole & UserRoleRelations;
