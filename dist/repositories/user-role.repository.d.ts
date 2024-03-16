import { DefaultCrudRepository } from '@loopback/repository';
import { UserRoleDataSource } from '../datasources';
import { UserRole, UserRoleRelations } from '../models';
export declare class UserRoleRepository extends DefaultCrudRepository<UserRole, typeof UserRole.prototype.id, UserRoleRelations> {
    constructor(dataSource: UserRoleDataSource);
}
