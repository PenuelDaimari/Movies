"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'Subscription',
    connector: 'mongodb',
    url: 'mongodb://localhost:27017/subscription',
    host: 'localhost',
    port: 27017,
    user: '',
    password: '',
    database: 'subscription',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let SubscriptionDataSource = class SubscriptionDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.SubscriptionDataSource = SubscriptionDataSource;
SubscriptionDataSource.dataSourceName = 'Subscription';
SubscriptionDataSource.defaultConfig = config;
exports.SubscriptionDataSource = SubscriptionDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.Subscription', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], SubscriptionDataSource);
//# sourceMappingURL=subscription.datasource.js.map