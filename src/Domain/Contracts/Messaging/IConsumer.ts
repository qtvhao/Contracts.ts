export interface IConsumer {
    subscribe(topic: string, onMessage: (message: string) => Promise<void>): void;
}
