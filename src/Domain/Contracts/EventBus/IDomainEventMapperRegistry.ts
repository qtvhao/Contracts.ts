import { IDomainEventMapper } from "../../../Application/Contracts/Mappers/IDomainEventMapper";
import { IDomainEvent } from "../IDomainEvent";
import { Message } from "./EachMessagePayload";

/**
 * Registry for managing event mappers by event name.
 */
export interface IDomainEventMapperRegistry<T extends IDomainEvent, U extends Message> {
  get(eventName: string): IDomainEventMapper<U, T> | undefined;
  set(eventName: string, mapper: IDomainEventMapper<U, T>): void;
}
