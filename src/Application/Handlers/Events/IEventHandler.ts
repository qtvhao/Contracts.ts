// src/Application/Handlers/Events/IEventHandler.ts

import { IDomainEvent } from "../../../Domain/Contracts/IDomainEvent";

export interface IEventHandler<T extends IDomainEvent = IDomainEvent> {
  /**
   * Handles a domain event.
   * @param event The domain event to handle.
   */
  handle(event: T): Promise<void>;

  /**
   * Returns the event class this handler is responsible for.
   */
  supports(): new (...args: any[]) => T;
}
