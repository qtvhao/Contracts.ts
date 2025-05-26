import { CommandConstructor, ICommand } from "../../../Commands/ICommand";
import { ICommandHandler } from "./ICommandHandler";

export interface ICommandHandlerResolver {
  /**
   * Binds a command type to its handler.
   * Enables dynamic handler lookup at runtime.
   *
   * @param query - Command constructor.
   * @param handler - Handler instance for the command.
   */
  register<T extends ICommand>(
    query: CommandConstructor<T>,
    handler: ICommandHandler<T>,
  ): void;

  /**
   * Retrieves the handler for a given command type.
   *
   * @param query - Command constructor.
   * @returns Handler for the specified command.
   */
  resolve<T extends ICommand>(
    query: CommandConstructor<T>,
  ): ICommandHandler<T>;
}
