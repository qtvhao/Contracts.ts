import { IEventHandler } from "../../Application/Handlers/Events/IEventHandler";
import { IDomainEvent } from "./IDomainEvent";

export interface IEventBus {
  publish(events: IDomainEvent[]): Promise<void>;
  subscribe<T extends IDomainEvent>(eventName: string, handler: IEventHandler<T>): void;
}
