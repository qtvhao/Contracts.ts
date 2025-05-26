import { IDomainEvent } from "../../../../Domain/Contracts/IDomainEvent";
import { ICommand } from "../../../Commands/ICommand";

export interface ICommandHandler<TCommand extends ICommand> {
  handle(command: TCommand): Promise<void>;

  getPublishedEvents(): ReadonlyArray<IDomainEvent>;
}
