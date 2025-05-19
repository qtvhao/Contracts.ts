import { IEventHandler } from "../../../Application/Handlers/Events/IEventHandler";
import { IDomainEvent } from "../IDomainEvent";
import { IEventPublisher } from "./IEventPublisher";
import { IEventSubscriber } from "./IEventSubscriber";
import { IInitializable } from "../Lifecycle/IInitializable";
import { IEventMapperRegistry } from "./IEventMapperRegistry";

export type EventConstructor<T extends IDomainEvent> = new (
  ...args: any[]
) => T;

export interface IEventBus
  extends
    IEventPublisher,
    IEventSubscriber,
    IEventMapperRegistry,
    IInitializable {}
