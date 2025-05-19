import { IDomainEvent } from "../IDomainEvent";
import { IEventPublisher } from "./IEventPublisher";
import { IEventSubscriber } from "./IEventSubscriber";
import { IInitializable } from "../Lifecycle/IInitializable";

export type EventConstructor<T extends IDomainEvent> = new (
  ...args: any[]
) => T;

export interface IEventBus
  extends
    IEventPublisher,
    IEventSubscriber,
    IInitializable {}
