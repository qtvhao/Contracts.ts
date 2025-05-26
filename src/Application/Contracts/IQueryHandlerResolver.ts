import { IQuery } from "../Commands/IQuery";
import { IQueryHandler } from "../Handlers/CQRS/Contracts/IQueryHandler";

export interface IQueryHandlerResolver {
  resolve<TQuery extends IQuery, TResult extends object | void>(
    command: TQuery
  ): IQueryHandler<TQuery, TResult>;
}
