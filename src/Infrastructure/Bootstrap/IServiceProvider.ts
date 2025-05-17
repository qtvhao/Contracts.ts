export interface IServiceProvider {
  register(): void;
  booting(callback: () => void): void;
  booted(callback: () => void): void;
  callBootingCallbacks(): void;
  callBootedCallbacks(): void;
  provides(): string[];
  when(): string[];
}
