import { Entity } from '@loopback/repository';
export declare class Subscription extends Entity {
    type: string;
    id?: string;
    constructor(data?: Partial<Subscription>);
}
export interface SubscriptionRelations {
}
export type SubscriptionWithRelations = Subscription & SubscriptionRelations;
