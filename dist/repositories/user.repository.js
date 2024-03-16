"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
const bcrypt_1 = require("bcrypt");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, userRoleRepositoryGetter, roleRepositoryGetter, subscriptionRepositoryGetter) {
        super(models_1.User, dataSource);
        this.userRoleRepositoryGetter = userRoleRepositoryGetter;
        this.roleRepositoryGetter = roleRepositoryGetter;
        this.subscriptionRepositoryGetter = subscriptionRepositoryGetter;
        this.subscription = this.createBelongsToAccessorFor('subscription', subscriptionRepositoryGetter);
        this.registerInclusionResolver('subscription', this.subscription.inclusionResolver);
        this.userRole = this.createHasManyThroughRepositoryFactoryFor('userRole', roleRepositoryGetter, userRoleRepositoryGetter);
        this.registerInclusionResolver('userRole', this.userRole.inclusionResolver);
    }
    async authenticate(email, password) {
        // Find user by email
        const user = await this.findOne({ where: { email } });
        if (!user) {
            return null; // User not found
        }
        // Verify password
        const passwordMatched = await (0, bcrypt_1.compare)(password, user.password);
        if (!passwordMatched) {
            return null; // Password doesn't match
        }
        return user; // User authenticated
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.User')),
    tslib_1.__param(1, repository_1.repository.getter('UserRoleRepository')),
    tslib_1.__param(2, repository_1.repository.getter('RoleRepository')),
    tslib_1.__param(3, repository_1.repository.getter('SubscriptionRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.UserDataSource, Function, Function, Function])
], UserRepository);
//# sourceMappingURL=user.repository.js.map