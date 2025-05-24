import { IQuery } from "../Commands/IQuery";

export interface IQueryBus {
  execute<T extends IQuery, R>(query: T): Promise<R>;
}
