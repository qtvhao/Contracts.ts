export interface Message<K = any, V = any> {
  /**
   * Partitioning key, often an entity ID (e.g., Order ID).
   */
  key?: K;

  /**
   * Serialized domain event payload to be deserialized via IDomainEventMapper.
   */
  value: V;

  /**
   * Optional metadata (e.g., correlation ID, version, tenant).
   */
  headers?: Record<string, Buffer | string>; // Optional headers
}

export interface EachMessagePayload {
  /**
   * Kafka topic where the message was consumed (e.g., "order.created").
   */
  topic: string;

  message: Message;
}
