"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddress = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
let UserAddress = class UserAddress extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], UserAddress.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 255 }),
    __metadata("design:type", String)
], UserAddress.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], UserAddress.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], UserAddress.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], UserAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], UserAddress.prototype, "zip_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], UserAddress.prototype, "status", void 0);
UserAddress = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_adress' })
], UserAddress);
exports.UserAddress = UserAddress;
//# sourceMappingURL=user_adress.entity.js.map