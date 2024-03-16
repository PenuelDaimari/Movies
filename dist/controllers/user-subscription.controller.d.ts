import { User, Subscription } from '../models';
import { UserRepository } from '../repositories';
export declare class UserSubscriptionController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    getSubscription(id: typeof User.prototype.id): Promise<Subscription>;
}
