import { IQuery } from "../Commands/IQuery";
import { IQueryResult } from "../DTOs/IQueryResult";

export interface IQueryBus {
  execute<T extends IQuery, R extends IQueryResult>(query: T): Promise<R>;
}
