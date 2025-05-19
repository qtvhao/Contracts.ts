import { EachMessagePayload } from "../EventBus";

export type MessageHandler = (payload: EachMessagePayload) => Promise<void>;

export interface IConsumer {
  run(config: {
    eachMessage: MessageHandler;
  }): Promise<void>;
}
