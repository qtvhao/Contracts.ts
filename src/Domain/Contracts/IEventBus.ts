import { IEventHandler } from "../../Application/Handlers/Events/IEventHandler";
import { IDomainEvent } from "./IDomainEvent";

export type EventConstructor<T extends IDomainEvent> = new (...args: any[]) => T;

export interface IEventBus {
  publish(events: IDomainEvent[]): Promise<void>;
  subscribe<T extends IDomainEvent>(eventName: EventConstructor<T>, handler: IEventHandler<T>): void;
}
