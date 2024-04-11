import { ChangeEvent, FC, useState } from 'react'

export const ProductSearchBar: FC<{ onSearch: (param: string) => void }> = ({ onSearch }) => {
  const [inputText, setInputText] = useState('')
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      onSearch(inputText)
    }
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <input type="text" onChange={handleInputChange} />
    </form>
  )
}
