export interface EachMessagePayload {
  topic: string;
  message: {
    key: Buffer | null;
    value: Buffer | null;
    headers?: Record<string, Buffer | string | undefined>;
  };
}