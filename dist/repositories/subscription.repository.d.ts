import { DefaultCrudRepository } from '@loopback/repository';
import { SubscriptionDataSource } from '../datasources';
import { Subscription, SubscriptionRelations } from '../models';
export declare class SubscriptionRepository extends DefaultCrudRepository<Subscription, typeof Subscription.prototype.id, SubscriptionRelations> {
    constructor(dataSource: SubscriptionDataSource);
}
