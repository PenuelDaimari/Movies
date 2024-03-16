"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const role_model_1 = require("./role.model");
const user_role_model_1 = require("./user-role.model");
const subscription_model_1 = require("./subscription.model");
let User = class User extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.User = User;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => role_model_1.Role, { through: { model: () => user_role_model_1.UserRole, keyFrom: 'id' } }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "userRole", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => subscription_model_1.Subscription),
    tslib_1.__metadata("design:type", String)
], User.prototype, "subscriptionId", void 0);
exports.User = User = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
//# sourceMappingURL=user.model.js.map