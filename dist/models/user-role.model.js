"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let UserRole = class UserRole extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.UserRole = UserRole;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserRole.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], UserRole.prototype, "roleId", void 0);
exports.UserRole = UserRole = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserRole);
//# sourceMappingURL=user-role.model.js.map