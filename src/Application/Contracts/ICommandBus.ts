import { ICommand } from "../Commands/ICommand";
import { ICommandHandlerResolver } from "../Handlers/CQRS/Contracts/ICommandHandlerResolver";

export interface ICommandBus {
  readonly handlerResolver: ICommandHandlerResolver;
  dispatch<T extends ICommand>(command: T): Promise<void>;
}
