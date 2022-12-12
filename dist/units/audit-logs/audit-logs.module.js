"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogsModule = void 0;
const common_1 = require("@nestjs/common");
const audit_logs_controller_1 = require("./audit-logs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const audit_log_entity_1 = require("../../models/logs/audit_log.entity");
const audit_logs_service_1 = require("./audit-logs.service");
let AuditLogsModule = class AuditLogsModule {
};
AuditLogsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([audit_log_entity_1.AuditLog])],
        providers: [audit_logs_service_1.AuditLogService],
        controllers: [audit_logs_controller_1.AuditLogsController],
        exports: [audit_logs_service_1.AuditLogService]
    })
], AuditLogsModule);
exports.AuditLogsModule = AuditLogsModule;
//# sourceMappingURL=audit-logs.module.js.map