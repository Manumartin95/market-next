'use client'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const ProductSearchBar: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [inputText, setInputText] = useState(searchParams.get('search') ?? '')
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const handleSubmit = () => {
    if (inputText.length > 0) {
      router.push(pathname + '?' + createQueryString('search', inputText))
    } else {
      router.push(pathname)
    }
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  )
}
