"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserRoleController = class UserRoleController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async find(id, filter) {
        return this.userRepository.userRole(id).find(filter);
    }
    async create(id, role) {
        return this.userRepository.userRole(id).create(role);
    }
    async patch(id, role, where) {
        return this.userRepository.userRole(id).patch(role, where);
    }
    async delete(id, where) {
        return this.userRepository.userRole(id).delete(where);
    }
};
exports.UserRoleController = UserRoleController;
tslib_1.__decorate([
    (0, rest_1.get)('/users/{id}/roles', {
        responses: {
            '200': {
                description: 'Array of User has many Role through UserRole',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Role) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/users/{id}/roles', {
        responses: {
            '200': {
                description: 'create a Role model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Role) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Role, {
                    title: 'NewRoleInUser',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/users/{id}/roles', {
        responses: {
            '200': {
                description: 'User.Role PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Role, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Role))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/users/{id}/roles', {
        responses: {
            '200': {
                description: 'User.Role DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Role))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "delete", null);
exports.UserRoleController = UserRoleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserRoleController);
//# sourceMappingURL=user-role.controller.js.map