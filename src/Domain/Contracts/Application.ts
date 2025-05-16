// src/Domain/Contracts/Application.ts

import { Container } from "inversify";
import { ServiceProvider } from "support.ts"

export interface Application extends Container {
  // Path accessors
  basePath(): string;
  configPath(): string;
  databasePath(): string;
  resourcesPath(): string;
  storagePath(): string;
  langPath(): string;
  publicPath(): string;

  // Environment detection
  environment(): string;
  isLocal(): boolean;
  isProduction(): boolean;
  isTesting(): boolean;
  runningInConsole(): boolean;
  hasDebugModeEnabled(): boolean;

  // Service Provider lifecycle
  register(provider: ServiceProvider): void;
  boot(): Promise<void>;
  resolveProvider<T>(provider: ServiceProvider): T;

  // Localization
  getLocale(): string;
  setLocale(locale: string): void;

  // Lifecycle control
  terminate(): Promise<void>;
  terminating(callback: () => Promise<void> | void): void;
  booting(callback: () => Promise<void> | void): void;
}
