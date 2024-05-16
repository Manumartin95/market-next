import { FC } from 'react'

type ServerComponent<Props = void> = (props: Props) => Promise<JSX.Element>
export const resolveServerComponent = async <T>(Component: ServerComponent<T>, props: T): Promise<FC> => {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}
