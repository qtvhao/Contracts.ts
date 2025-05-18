// Contracts.ts/src/Application/Handlers/CQRS/Contracts/ICommandHandler.ts

import { IDomainEvent } from "../../../../Domain/Contracts/IDomainEvent";
import { ICommand } from "../../../Contracts/Mappers/Commands/ICommand";

export interface ICommandHandler<TCommand extends ICommand, TResult = void> {
  execute(command: TCommand): Promise<TResult>;

  /**
   * Optional hook to expose domain events generated during execution,
   * aligning with Event Sourcing and EDA.
   */
  getPublishedEvents(): IDomainEvent[];
}
