import { EachMessagePayload } from "../EventBus";

export interface IConsumer {
  run(config: {
    eachMessage: (payload: EachMessagePayload) => Promise<void>;
  }): Promise<void>;
}
