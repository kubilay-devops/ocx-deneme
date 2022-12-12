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
exports.CalendarDetail = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
let CalendarDetail = class CalendarDetail extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], CalendarDetail.prototype, "calendar_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], CalendarDetail.prototype, "calendar_space_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array', array: true }),
    __metadata("design:type", Array)
], CalendarDetail.prototype, "calendar_days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 128 }),
    __metadata("design:type", String)
], CalendarDetail.prototype, "description", void 0);
CalendarDetail = __decorate([
    (0, typeorm_1.Entity)({ name: 'calendar_detail' })
], CalendarDetail);
exports.CalendarDetail = CalendarDetail;
//# sourceMappingURL=calendar-detail.entity.js.map