import { Brokers } from 'src/models/brokers/brokers.entity';
import { BrokerUser } from 'src/models/brokers/broker_user.entity';
import { UsersService } from 'src/units/user/user/user.service';
import { Repository } from 'typeorm';
import { BrokerUserService } from '../broker_user/broker_user.service';
import { BrokerDTO } from './broker.dto';
export declare class BrokersService {
    private readonly repo;
    private readonly brokerUserRepo;
    private readonly userService;
    private readonly brokerUserService;
    constructor(repo: Repository<Brokers>, brokerUserRepo: Repository<BrokerUser>, userService: UsersService, brokerUserService: BrokerUserService);
    getAll(): Promise<BrokerDTO[]>;
    getAllByStatus(status: boolean): Promise<BrokerDTO[]>;
    getByIdMany(id: string): Promise<BrokerDTO[]>;
    getById(id: string): Promise<BrokerDTO>;
    getByOwner(ownerID: string): Promise<BrokerDTO[]>;
    getByCountry(country: number): Promise<BrokerDTO[]>;
    getByCity(city: number): Promise<BrokerDTO[]>;
    getSimpleAllBrokers(): Promise<any>;
    getSimpleBrokerByID(id: string): Promise<any>;
    getSimpleAllBrokerManager(): Promise<any>;
    getSimpleBrokerManagerByID(id: string): Promise<any>;
    create(dto: BrokerDTO): Promise<BrokerDTO>;
    update(id: string, dto: BrokerDTO): Promise<BrokerDTO>;
    changeStatus(id: string): Promise<BrokerDTO>;
    softDelete(id: string): Promise<BrokerDTO>;
    hardDelete(id: string): Promise<any>;
}
