import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Role} from './role.model';
import {UserRole} from './user-role.model';
import {Subscription} from './subscription.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @hasMany(() => Role, {through: {model: () => UserRole, keyFrom: 'id'}})
  userRole: Role[];

  @belongsTo(() => Subscription)
  subscriptionId: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
