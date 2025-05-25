import { ICommand } from "../Commands/ICommand";
import { ICommandHandler } from "../Handlers/CQRS/Contracts/ICommandHandler";

export interface ICommandHandlerResolver {
  resolve<TCommand extends ICommand, TResult extends object | void>(
    command: TCommand
  ): ICommandHandler<TCommand, TResult>;
}
