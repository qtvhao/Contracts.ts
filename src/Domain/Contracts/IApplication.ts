import {
    BindingIdentifier,
    BindToFluentSyntax,
    GetOptions,
    OptionalGetOptions,
    ServiceIdentifier,
} from "inversify";
import { IServiceProvider } from "../../Infrastructure/Bootstrap/IServiceProvider";

export interface IApplication {
    bind<T>(serviceIdentifier: ServiceIdentifier<T>): BindToFluentSyntax<T>;
    get<T>(
        serviceIdentifier: ServiceIdentifier<T>,
        options: OptionalGetOptions,
    ): T | undefined;
    get<T>(serviceIdentifier: ServiceIdentifier<T>, options?: GetOptions): T;
    getAll<T>(
        serviceIdentifier: ServiceIdentifier<T>,
        options?: GetOptions,
    ): T[];
    getAllAsync<T>(
        serviceIdentifier: ServiceIdentifier<T>,
        options?: GetOptions,
    ): Promise<T[]>;
    getAsync<T>(
        serviceIdentifier: ServiceIdentifier<T>,
        options: OptionalGetOptions,
    ): Promise<T | undefined>;
    getAsync<T>(
        serviceIdentifier: ServiceIdentifier<T>,
        options?: GetOptions,
    ): Promise<T>;
    rebind<T>(
        serviceIdentifier: ServiceIdentifier<T>,
    ): Promise<BindToFluentSyntax<T>>;
    rebindSync<T>(
        serviceIdentifier: ServiceIdentifier<T>,
    ): BindToFluentSyntax<T>;
    unbind(identifier: BindingIdentifier | ServiceIdentifier): Promise<void>;
    unbindAll(): Promise<void>;
    unbindSync(identifier: BindingIdentifier | ServiceIdentifier): void;

    // Path accessors
    basePath(): string;
    configPath(): string;
    databasePath(): string;
    resourcesPath(): string;
    storagePath(): string;
    langPath(): string;
    publicPath(): string;

    // Environment detection
    environment(): string;
    isLocal(): boolean;
    isProduction(): boolean;
    isTesting(): boolean;
    runningInConsole(): boolean;
    hasDebugModeEnabled(): boolean;

    // Service Provider lifecycle
    register(provider: IServiceProvider): void;
    boot(): Promise<void>;
    resolveProvider<T>(provider: IServiceProvider): T;

    // Localization
    getLocale(): string;
    setLocale(locale: string): void;

    // Lifecycle control
    terminate(): Promise<void>;
    terminating(callback: () => Promise<void> | void): void;
    booting(callback: () => Promise<void> | void): void;
}
