import { IMessageBroker, BrokerType } from "../../Domain/Contracts/Messaging";

export interface IMessageBrokerFactory {
  create(driver: BrokerType): IMessageBroker;
}
