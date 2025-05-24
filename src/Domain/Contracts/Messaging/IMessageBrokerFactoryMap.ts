import { BrokerType } from "./IMessageBroker";
import { IMessageBroker } from "./IMessageBroker";

export type IMessageBrokerFactoryMap = Map<BrokerType, () => IMessageBroker>;
