/// <reference types="node" />
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare const typeOrmModuleOptions: TypeOrmModuleOptions;
export declare const OrmConfig: {
    migrationsTableName: string;
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
    retryAttempts?: number;
    retryDelay?: number;
    toRetry?: (err: any) => boolean;
    autoLoadEntities?: boolean;
    keepConnectionAlive?: boolean;
    verboseRetryLog?: boolean;
    type?: "postgres";
    schema?: string;
    driver?: any;
    nativeDriver?: any;
    useUTC?: boolean;
    replication?: {
        readonly master: import("typeorm/driver/postgres/PostgresConnectionCredentialsOptions").PostgresConnectionCredentialsOptions;
        readonly slaves: import("typeorm/driver/postgres/PostgresConnectionCredentialsOptions").PostgresConnectionCredentialsOptions[];
    };
    connectTimeoutMS?: number;
    uuidExtension?: "pgcrypto" | "uuid-ossp";
    poolErrorHandler?: (err: any) => any;
    logNotifications?: boolean;
    installExtensions?: boolean;
    applicationName?: string;
    name?: string;
    entities?: import("typeorm").MixedList<string | Function | import("typeorm").EntitySchema<any>>;
    subscribers?: import("typeorm").MixedList<string | Function>;
    migrationsTransactionMode?: "all" | "none" | "each";
    metadataTableName?: string;
    namingStrategy?: import("typeorm").NamingStrategyInterface;
    logging?: import("typeorm").LoggerOptions;
    logger?: "debug" | "advanced-console" | "simple-console" | "file" | import("typeorm").Logger;
    maxQueryExecutionTime?: number;
    poolSize?: number;
    synchronize?: boolean;
    migrationsRun?: boolean;
    dropSchema?: boolean;
    entityPrefix?: string;
    entitySkipConstructor?: boolean;
    extra?: any;
    relationLoadStrategy?: "query" | "join";
    typename?: string;
    cache?: boolean | {
        readonly type?: "database" | "redis" | "ioredis" | "ioredis/cluster";
        readonly provider?: (connection: import("typeorm").DataSource) => import("typeorm/cache/QueryResultCache").QueryResultCache;
        readonly tableName?: string;
        readonly options?: any;
        readonly alwaysEnabled?: boolean;
        readonly duration?: number;
        readonly ignoreErrors?: boolean;
    };
    url?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string | (() => string) | (() => Promise<string>);
    database?: string;
    ssl?: boolean | import("tls").TlsOptions;
};
export default OrmConfig;
