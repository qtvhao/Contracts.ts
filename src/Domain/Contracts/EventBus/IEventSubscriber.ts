import { IEventHandler } from "../../../Application/Handlers/Events/IEventHandler";
import { EventConstructor, IDomainEvent } from "../IDomainEvent";

export interface IEventSubscriber {
  subscribe<T extends IDomainEvent>(
    eventCtor: EventConstructor<T>,
    handler: IEventHandler<T>
  ): Promise<void>;
}
