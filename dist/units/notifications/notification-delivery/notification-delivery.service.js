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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationDeliveryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notification_delivery_entity_1 = require("../../../models/notifications/notification_delivery.entity");
const typeorm_2 = require("typeorm");
const notification_delivery_dto_1 = require("./notification-delivery.dto");
let NotificationDeliveryService = class NotificationDeliveryService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => notification_delivery_dto_1.NotificationDeliveryDTO.fromEntity(e)));
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => notification_delivery_dto_1.NotificationDeliveryDTO.fromEntity(e)));
    }
    async getByIdMany(id) {
        return await this.repo
            .find({ where: { id: id } })
            .then((datas) => datas.map((e) => notification_delivery_dto_1.NotificationDeliveryDTO.fromEntity(e)));
    }
    async getByUser(id) {
        return await this.repo
            .find({ where: { user_id: id } })
            .then((datas) => datas.map((e) => notification_delivery_dto_1.NotificationDeliveryDTO.fromEntity(e)));
    }
    async getByNotification(id) {
        return await this.repo
            .find({ where: { notification_id: id } })
            .then((datas) => datas.map((e) => notification_delivery_dto_1.NotificationDeliveryDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => notification_delivery_dto_1.NotificationDeliveryDTO.fromEntity(datas));
    }
    async create(dto) {
        return await this.repo
            .save(notification_delivery_dto_1.NotificationDeliveryDTO.toEntity(dto))
            .then((e) => notification_delivery_dto_1.NotificationDeliveryDTO.fromEntity(e));
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = notification_delivery_dto_1.NotificationDeliveryDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async getAllWithAll() {
        const data = await this.repo.query(`SELECT * FROM public."getLeadsWithAll"`);
        return data;
    }
    async changeStatus(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = !findData.isDeleted;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = notification_delivery_dto_1.NotificationDeliveryDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = notification_delivery_dto_1.NotificationDeliveryDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
NotificationDeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notification_delivery_entity_1.NotificationDelivery)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotificationDeliveryService);
exports.NotificationDeliveryService = NotificationDeliveryService;
//# sourceMappingURL=notification-delivery.service.js.map