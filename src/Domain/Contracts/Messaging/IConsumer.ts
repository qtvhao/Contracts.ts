import { EachMessagePayload } from "../EventBus";

export type MessageHandler = (payload: EachMessagePayload) => Promise<void>;

export interface IConsumer {
  /**
   * Subscribes to a topic or queue and registers a message handler.
   */
  subscribe<T>(
    topic: string,
    handler: MessageHandler,
  ): Promise<void>;

  /**
   * Unsubscribes from the given topic.
   */
  unsubscribe(topic: string): Promise<void>;
}
