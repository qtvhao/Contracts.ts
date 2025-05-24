import { ICommand } from "../Commands/ICommand";

export interface ICommandBus {
  dispatch<T extends ICommand>(command: T): Promise<void>;
}
