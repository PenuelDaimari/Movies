import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UserRoleDataSource} from '../datasources';
import {UserRole, UserRoleRelations} from '../models';

export class UserRoleRepository extends DefaultCrudRepository<
  UserRole,
  typeof UserRole.prototype.id,
  UserRoleRelations
> {
  constructor(
    @inject('datasources.UserRole') dataSource: UserRoleDataSource,
  ) {
    super(UserRole, dataSource);
  }
}
