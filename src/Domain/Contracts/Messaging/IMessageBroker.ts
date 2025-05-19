import { IConsumer } from "./IConsumer";
import { IProducer } from "./IProducer";

export interface IMessageBroker extends IConsumer, IProducer {}
