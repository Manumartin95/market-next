import { FC } from 'react'

export const resolveServerComponent = async <Props>(Component: FC<Props>, props: Props) => {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}
