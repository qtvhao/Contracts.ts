import { IDomainEventMapper } from "../../../Application/Contracts/Mappers/IDomainEventMapper";
import { EventConstructor, IDomainEvent } from "../IDomainEvent";
import { Message } from "./EachMessagePayload";

/**
 * Registry for managing event mappers by event name.
 */
export interface IDomainEventMapperRegistry<T extends IDomainEvent, U extends Message> {
  get(eventCtor: EventConstructor<T>): IDomainEventMapper<U, T> | undefined;
  set(eventCtor: EventConstructor<T>, mapper: IDomainEventMapper<U, T>): void;
}
