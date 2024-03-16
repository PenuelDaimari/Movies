import { DefaultCrudRepository } from '@loopback/repository';
import { RoleDataSource } from '../datasources';
import { Role, RoleRelations } from '../models';
export declare class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.id, RoleRelations> {
    constructor(dataSource: RoleDataSource);
}
