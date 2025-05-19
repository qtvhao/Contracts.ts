// Contracts.ts/src/Domain/Contracts/Messaging/IEventMapperRegistry.ts
/**
 * Base interface for a domain event.
 */

import { IEventMapper } from "../../../Application/Contracts/Mappers/IEventMapper";
import { IDomainEvent } from "../IDomainEvent";

/**
 * Registry for managing event mappers by event name.
 */
export interface IEventMapperRegistry {
  get(eventName: string): IEventMapper<any, any> | undefined;
  set<T extends IDomainEvent, U>(eventName: string, mapper: IEventMapper<U, T>): void;
}
