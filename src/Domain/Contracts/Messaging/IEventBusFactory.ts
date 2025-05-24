import { IEventBus } from "../EventBus";

export interface IEventBusFactory {
  create(): IEventBus;
}
