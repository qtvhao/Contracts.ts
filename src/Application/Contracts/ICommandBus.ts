import { ICommand } from "../Commands/ICommand";
import { ICommandHandlerResolver } from "./ICommandHandlerResolver";

export interface ICommandBus {
  readonly handlerResolver: ICommandHandlerResolver;
  dispatch<T extends ICommand>(command: T): Promise<void>;
}
