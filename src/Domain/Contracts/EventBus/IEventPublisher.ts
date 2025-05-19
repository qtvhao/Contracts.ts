import { IDomainEvent } from "../IDomainEvent";

export interface IEventPublisher {
  publish(events: IDomainEvent[]): Promise<void>;
}
