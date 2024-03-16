"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'UserRole',
    connector: 'mongodb',
    url: 'mongodb://localhost:27017/UserRole',
    host: 'localhost',
    port: 27017,
    user: '',
    password: '',
    database: 'UserRole',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let UserRoleDataSource = class UserRoleDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.UserRoleDataSource = UserRoleDataSource;
UserRoleDataSource.dataSourceName = 'UserRole';
UserRoleDataSource.defaultConfig = config;
exports.UserRoleDataSource = UserRoleDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.UserRole', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserRoleDataSource);
//# sourceMappingURL=user-role.datasource.js.map