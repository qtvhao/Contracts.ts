// Contracts.ts/src/Application/Contracts/Mappers/Commands/ICommand.ts

export interface ICommandMetadata {
    correlationId: string;
    issuedBy: string;
    tenantId: string;
}

export interface ICommand {
    /**
     * Defines a unique identifier for the command’s intent, enabling deterministic routing, handling,
     * and logging across Command Buses and distributed service boundaries (SOA).
     * For e.g., 'domain.context.action', 'order.place'
     */
    readonly type: string;
    readonly metadata?: ICommandMetadata;
}

