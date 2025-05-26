import { IQuery, QueryConstructor } from "../Commands/IQuery";
import { IQueryResult } from "../DTOs/IQueryResult";
import { IQueryHandler } from "../Handlers/CQRS/Contracts/IQueryHandler";

export interface IEventHandlerResolver {
  /**
   * Registers a query handler for a specific query type.
   * @param event - The constructor function of the query.
   * @param handler - The query handler to associate with the query type.
   */
  register<T extends IQuery, TResult extends IQueryResult>(
    event: QueryConstructor<T>,
    handler: IQueryHandler<T, TResult>
  ): void;

  /**
   * Resolves and retrieves the registered handler for a specific query type.
   * @param event - The constructor function of the query.
   * @returns The query handler associated with the query type.
   */
  resolve<T extends IQuery, TResult extends IQueryResult>(
    event: QueryConstructor<T>
  ): IQueryHandler<T, TResult>;
}
