import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {UserDataSource} from '../datasources';
import {User, UserRelations, Role, UserRole, Subscription} from '../models';
import {UserRoleRepository} from './user-role.repository';
import {RoleRepository} from './role.repository';
import {SubscriptionRepository} from './subscription.repository';
import {compare} from 'bcrypt';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly userRole: HasManyThroughRepositoryFactory<Role, typeof Role.prototype.id,
          UserRole,
          typeof User.prototype.id
        >;

  public readonly subscription: BelongsToAccessor<Subscription, typeof User.prototype.id>;

  constructor(
    @inject('datasources.User') dataSource: UserDataSource, @repository.getter('UserRoleRepository') protected userRoleRepositoryGetter: Getter<UserRoleRepository>, @repository.getter('RoleRepository') protected roleRepositoryGetter: Getter<RoleRepository>, @repository.getter('SubscriptionRepository') protected subscriptionRepositoryGetter: Getter<SubscriptionRepository>,
  ) {
    super(User, dataSource);
    this.subscription = this.createBelongsToAccessorFor('subscription', subscriptionRepositoryGetter,);
    this.registerInclusionResolver('subscription', this.subscription.inclusionResolver);
    this.userRole = this.createHasManyThroughRepositoryFactoryFor('userRole', roleRepositoryGetter, userRoleRepositoryGetter,);
    this.registerInclusionResolver('userRole', this.userRole.inclusionResolver);
  }

  async authenticate(email: string, password: string): Promise<User | null> {
    // Find user by email
    const user = await this.findOne({where: {email}});
    if (!user) {
      return null; // User not found
    }
    // Verify password
    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      return null; // Password doesn't match
    }
    return user; // User authenticated
  }
}
