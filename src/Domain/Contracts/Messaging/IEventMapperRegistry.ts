// src/Domain/Contracts/Messaging/IEventMapperRegistry.ts
import { IEventMapper } from "@Application/Contracts/Mappers/IEventMapper";
import { IDomainEvent } from "@Domain/Contracts/IDomainEvent";

export type EventCtor<T extends IDomainEvent> = new (...args: any[]) => T;

export interface IEventMapperRegistry {
  get<T extends IDomainEvent>(ctor: EventCtor<T>): IEventMapper<any, T> | undefined;
  set<T extends IDomainEvent, U>(ctor: EventCtor<T>, mapper: IEventMapper<U, T>): void;
}
