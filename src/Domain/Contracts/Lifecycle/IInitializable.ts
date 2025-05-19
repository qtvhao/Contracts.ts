export interface IInitializable {
  setup(): void;
  start(): Promise<void>;
}
