"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'Role',
    connector: 'mongodb',
    url: 'mongodb://localhost:27017/Role',
    host: 'localhost',
    port: 27017,
    user: '',
    password: '',
    database: 'Role',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let RoleDataSource = class RoleDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.RoleDataSource = RoleDataSource;
RoleDataSource.dataSourceName = 'Role';
RoleDataSource.defaultConfig = config;
exports.RoleDataSource = RoleDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.Role', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], RoleDataSource);
//# sourceMappingURL=role.datasource.js.map