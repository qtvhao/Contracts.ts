import { EventConstructor, IDomainEvent } from "../IDomainEvent";

export interface IEventTopicMapper {
  getEventConstructor(topic: string): EventConstructor<IDomainEvent> | undefined;
  getTopicForEvent(event: EventConstructor<IDomainEvent>): string;
  register(topic: string, constructor: EventConstructor<IDomainEvent>): void;
}
