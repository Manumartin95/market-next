export interface Query<Result, Param = void> {
  handle(param?: Param): Promise<Result>
}
