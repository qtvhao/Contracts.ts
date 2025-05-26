export type QueryConstructor<T extends IQuery> = new (
  ...args: any[]
) => T;

export interface IQuery {}
