import { container, InjectionToken } from 'tsyringe'

export type Type<T> = new (...args: never[]) => T

export function useResolve<T>(token: Type<T>): T {
  return container.resolve(token as InjectionToken<T>)
}
