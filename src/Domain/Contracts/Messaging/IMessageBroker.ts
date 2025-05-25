import { IInitializable } from "../Lifecycle/IInitializable";
import { IConsumer } from "./IConsumer";
import { IProducer } from "./IProducer";

export type BrokerType = "nats" | "kafka" | (string & {});

/**
 * IMessageBroker is a generic interface for NATS and Kafka message brokers.
 */
export interface IMessageBroker extends IConsumer, IProducer, IInitializable {
  /**
   * Gracefully shuts down the message broker, closing all channels and cleaning up resources.
   */
  shutdown(): Promise<void>;
}
