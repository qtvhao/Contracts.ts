export type CommandConstructor<T extends ICommand> = new (
  ...args: any[]
) => T;

export interface ICommand {
    readonly commandType: string;
    readonly commandId: string; // UUID to ensure idempotency
    readonly aggregateId: string; // Target AR identifier
    readonly occurredOn: Date; // Timestamp of issuance
}
