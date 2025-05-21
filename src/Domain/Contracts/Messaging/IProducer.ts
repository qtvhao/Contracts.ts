export interface IProducer {
    produce(topic: string, message: Buffer): Promise<void>;
}
