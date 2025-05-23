import { IDomainEventMapper } from "../../../Application/Contracts/Mappers/IDomainEventMapper";
import { IDomainEvent } from "../IDomainEvent";

/**
 * Registry for managing event mappers by event name.
 */
export interface IDomainEventMapperRegistry {
  get(eventName: string): IDomainEventMapper<any, any> | undefined;
  set<T extends IDomainEvent, U>(eventName: string, mapper: IDomainEventMapper<U, T>): void;
}
