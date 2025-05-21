export type EventConstructor<T extends IDomainEvent> = new (
  ...args: any[]
) => T;

export interface IDomainEvent {
  readonly occurredOn: Date;
  readonly aggregateId: string;

  /**
   * Event name, used in EDA topic naming (e.g., "order.placed").
   */
  eventName(): string;

  /**
   * Used for event replay or versioned projection.
   */
  version(): number;
}
