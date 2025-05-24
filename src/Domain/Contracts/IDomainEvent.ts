export type EventConstructor<T extends IDomainEvent> = new (
  ...args: any[]
) => T;

type DomainEventBrand = { __brand: 'DomainEvent' };

export interface IDomainEvent extends DomainEventBrand {
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
