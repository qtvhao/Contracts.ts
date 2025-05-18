// src/Application/Contracts/ICommandHandlerResolver.ts

import { ICommandHandler } from "../Handlers/CQRS/Contracts/ICommandHandler";
import { ICommand } from "./Mappers/Commands/ICommand";

export interface ICommandHandlerResolver {
  resolve<TCommand extends ICommand, TResult extends object | void>(
    command: TCommand
  ): ICommandHandler<TCommand, TResult>;
}
