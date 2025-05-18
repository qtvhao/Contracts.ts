// Contracts.ts/src/Application/Contracts/Mappers/Commands/ICommand.ts
type CommandType = `${string}.${string}.${string}`; // e.g., 'order.payment.capture'

export interface ICommandMetadata {
    /**
     * A unique identifier used to trace the command across services and logs.
     */
    correlationId: string;

    /**
     * Identifies the user or system that issued the command.
     */
    issuedBy: string;

    /**
     * Indicates the tenant context in multi-tenant systems.
     */
    tenantId: string;
}

export interface ICommand {
    /**
     * Defines a unique identifier for the command’s intent, enabling deterministic routing, handling,
     * and logging across Command Buses and distributed service boundaries (SOA).
     * For e.g., 'domain.context.action', 'order.place'
     */
    readonly type: CommandType;
    readonly metadata: ICommandMetadata;
}

