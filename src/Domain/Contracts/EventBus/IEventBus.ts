import { IDomainEvent } from "../IDomainEvent";
import { IEventPublisher } from "./IEventPublisher";
import { IEventSubscriber } from "./IEventSubscriber";
import { IInitializable } from "../Lifecycle/IInitializable";

/**
 * Note: IEventBus is exclusively for domain events.
 * For command dispatching, use ICommandBus to preserve CQRS boundaries.
 */
export interface IEventBus
  extends
    IEventPublisher,
    IEventSubscriber,
    IInitializable {}
