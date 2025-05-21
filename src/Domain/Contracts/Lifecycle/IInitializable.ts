export interface IInitializable {
  setup(): Promise<void>;
  start(): Promise<void>;
}
