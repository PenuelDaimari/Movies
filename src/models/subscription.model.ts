import {Entity, model, property} from '@loopback/repository';

@model()
export class Subscription extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<Subscription>) {
    super(data);
  }
}

export interface SubscriptionRelations {
  // describe navigational properties here
}

export type SubscriptionWithRelations = Subscription & SubscriptionRelations;
