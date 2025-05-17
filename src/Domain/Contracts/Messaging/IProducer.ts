export interface IProducer {
    send(topic: string, message: string): Promise<void>;
}
