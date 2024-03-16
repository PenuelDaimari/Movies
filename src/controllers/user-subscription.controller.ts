import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  User,
  Subscription,
} from '../models';
import {UserRepository} from '../repositories';

export class UserSubscriptionController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @get('/users/{id}/subscription', {
    responses: {
      '200': {
        description: 'Subscription belonging to User',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Subscription),
          },
        },
      },
    },
  })
  async getSubscription(
    @param.path.string('id') id: typeof User.prototype.id,
  ): Promise<Subscription> {
    return this.userRepository.subscription(id);
  }
}
