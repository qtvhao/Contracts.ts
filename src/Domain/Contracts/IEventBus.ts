import { IEventHandler } from "../../Application/Handlers/Events/IEventHandler";
import { IDomainEvent } from "./IDomainEvent";

export interface IEventBus {
  publish(event: IDomainEvent): void;
  registerHandler(handler: IEventHandler<IDomainEvent>): void;
}
