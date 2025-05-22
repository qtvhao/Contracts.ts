import { IMessageBroker } from "../../Domain/Contracts/Messaging";

export interface IMessageBrokerFactory {
  create(driver: string): IMessageBroker;
}
