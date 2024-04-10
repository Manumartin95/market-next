export interface Command<Param = void, Result = void> {
  handle(param?: Param): Promise<Result>
}
