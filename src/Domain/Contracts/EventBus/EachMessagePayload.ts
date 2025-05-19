export interface EachMessagePayload {
  /**
   * Kafka topic where the message was consumed (e.g., "order.created").
   */
  topic: string;

  message: {
    /**
     * Partitioning key, often an entity ID (e.g., Order ID).
     */
    key: Buffer | null;

    /**
     * Serialized domain event payload to be deserialized via IEventMapper.
     */
    value: Buffer | null;

    /**
     * Optional metadata (e.g., correlation ID, version, tenant).
     */
    headers?: Record<string, Buffer | string | undefined>;
  };
}