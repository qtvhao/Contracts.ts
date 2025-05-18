// src/Application/Contracts/ICommandHandlerResolver.ts

import { ICommandHandler } from "../Handlers/CQRS/Contracts/ICommandHandler";
import { ICommand } from "./Mappers/Commands/ICommand";

export interface ICommandHandlerResolver {
  resolve<TCommand extends ICommand, TResult extends void | object>(
    commandType: new (...args: any[]) => TCommand
  ): ICommandHandler<TCommand, TResult>;
}
