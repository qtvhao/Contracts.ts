import { IConsumer } from "./IConsumer";
import { IProducer } from "./IProducer";

export type BrokerType = "nats" | "kafka" | (string & {});

/**
 * IMessageBroker is a generic interface for NATS and Kafka message brokers.
 */
export interface IMessageBroker extends IConsumer, IProducer {
    connect(): Promise<void>;
    disconnect(): Promise<void>;

    /**
     * Identifies the type of broker (either 'nats' or 'kafka').
     */
    getBrokerType(): BrokerType;
}
