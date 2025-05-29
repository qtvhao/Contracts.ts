import { IDomainEventMapper } from "../../Application/Contracts/Mappers/IDomainEventMapper";
import { Message } from "./EventBus";
import { EventConstructor, IDomainEvent } from "./IDomainEvent";

export interface IDomainEventMapperRegistry<T extends IDomainEvent, U extends Message> {
  get(eventCtor: EventConstructor<T>): IDomainEventMapper<U, T> | undefined;
  set(eventCtor: EventConstructor<T>, mapper: IDomainEventMapper<U, T>): void;
}
