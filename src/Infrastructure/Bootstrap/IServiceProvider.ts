// IServiceProvider.ts
import { Application } from "../../Domain/Contracts";

// This interface defines the contract for a service provider in a dependency injection system.
// A service provider is responsible for registering services and managing their lifecycle,
// including boot-time hooks and conditional loading mechanisms.
export interface IServiceProvider {
  /**
   * Reference to the application instance.
   * Used to access the service container and application state.
   */
  app: Application;

  /**
   * Register services or bindings into the application's service container.
   * This method is called during the registration phase.
   */
  register(): void;

  /**
   * Optional boot method called during the boot phase after 'booting' callbacks and
   * before 'booted' callbacks. Useful for initializing services.
   */
  boot?(): void;

  /**
   * Register a callback to be executed before the boot process starts.
   * Useful for setting up prerequisites for services.
   */
  booting(callback: () => void): void;

  /**
   * Register a callback to be executed after the boot process completes.
   * Useful for post-boot logic like event listeners or loggers.
   */
  booted(callback: () => void): void;

  /**
   * Call all registered 'booting' callbacks.
   * Typically invoked internally during the boot phase.
   */
  callBootingCallbacks(): void;

  /**
   * Call all registered 'booted' callbacks.
   * Typically invoked internally after the boot phase.
   */
  callBootedCallbacks(): void;

  /** Hook: register logic to run on shutdown (cleanup, termination). */
  onShutdown(callback: () => void): void;

  /** Trigger all shutdown callbacks. */
  callShutdownCallbacks(): void;

  /**
   * Declare the list of services or bindings provided by this provider.
   * Used for deferred service loading.
   */
  provides(): string[];
}
