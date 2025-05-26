import { IEventHandler } from '../../Application/Handlers/Events/IEventHandler';
import { EventConstructor, IDomainEvent } from './IDomainEvent';

export interface IEventHandlerResolver {
  /**
   * Registers a handler for a specific domain event constructor.
   */
  register<T extends IDomainEvent>(
    event: EventConstructor<T>,
    handler: IEventHandler<T>
  ): void;

  /**
   * Resolves and returns a handler for a specific domain event constructor.
   * Throws an error if no handler is found.
   */
  resolve<T extends IDomainEvent>(
    event: EventConstructor<T>
  ): IEventHandler<T>;
}