import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyThroughRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { UserDataSource } from '../datasources';
import { User, UserRelations, Role, UserRole, Subscription } from '../models';
import { UserRoleRepository } from './user-role.repository';
import { RoleRepository } from './role.repository';
import { SubscriptionRepository } from './subscription.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected userRoleRepositoryGetter: Getter<UserRoleRepository>;
    protected roleRepositoryGetter: Getter<RoleRepository>;
    protected subscriptionRepositoryGetter: Getter<SubscriptionRepository>;
    readonly userRole: HasManyThroughRepositoryFactory<Role, typeof Role.prototype.id, UserRole, typeof User.prototype.id>;
    readonly subscription: BelongsToAccessor<Subscription, typeof User.prototype.id>;
    constructor(dataSource: UserDataSource, userRoleRepositoryGetter: Getter<UserRoleRepository>, roleRepositoryGetter: Getter<RoleRepository>, subscriptionRepositoryGetter: Getter<SubscriptionRepository>);
    authenticate(email: string, password: string): Promise<User | null>;
}
