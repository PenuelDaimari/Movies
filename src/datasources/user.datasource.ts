import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'User',
  connector: 'mongodb',
  url: 'mongodb://localhost:27017/User',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'User',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UserDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'User';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.User', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
