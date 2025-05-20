import { EachMessagePayload } from "../EventBus";

export type MessageHandler = (payload: EachMessagePayload) => Promise<void>;

export interface IConsumer {
  /**
   * Subscribes to a topic or queue and registers a message handler.
   */
  subscribe<T>(
    topic: string,
    handler: (message: T) => Promise<void>,
  ): Promise<void>;

  /**
   * Unsubscribes from the given topic.
   */
  unsubscribe(topic: string): Promise<void>;

  /**
   * Starts the consumer to process messages using the provided configuration.
   * The `eachMessage` handler will be invoked for every message received.
   */
  run(config: {
    eachMessage: MessageHandler;
  }): Promise<void>;
}
