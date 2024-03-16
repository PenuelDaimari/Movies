"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Subscription = class Subscription extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Subscription = Subscription;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Subscription.prototype, "type", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Subscription.prototype, "id", void 0);
exports.Subscription = Subscription = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Subscription);
//# sourceMappingURL=subscription.model.js.map