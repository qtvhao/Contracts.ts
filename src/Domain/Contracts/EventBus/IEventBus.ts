import { IDomainEvent } from "../IDomainEvent";
import { IEventPublisher } from "./IEventPublisher";
import { IEventSubscriber } from "./IEventSubscriber";
import { IInitializable } from "../Lifecycle/IInitializable";

export type EventConstructor<T extends IDomainEvent> = new (
  ...args: any[]
) => T;

/**
 * Note: IEventBus is exclusively for domain events.
 * For command dispatching, use ICommandBus to preserve CQRS boundaries.
 */
export interface IEventBus
  extends
    IEventPublisher,
    IEventSubscriber,
    IInitializable {}
