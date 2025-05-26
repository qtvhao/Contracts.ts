import { IDomainEvent } from "../../../../Domain/Contracts/IDomainEvent";
import { ICommand } from "../../../Commands/ICommand";

export interface ICommandHandler<TCommand extends ICommand> {
  handle(command: TCommand): Promise<void>;

  /**
   * Optional hook to expose domain events generated during execution,
   * aligning with Event Sourcing and EDA.
   */
  getPublishedEvents(): ReadonlyArray<IDomainEvent>;
}
