import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ProductSearchBar } from '@/features/product/delivery/client/components/ProductSearchBar/ProductSearchBar'

const push = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams('')),
  usePathname: jest.fn().mockReturnValue('/foo-path'),
}))

describe('ProductSearchBar', () => {
  const setup = () => {
    render(<ProductSearchBar />)
  }

  it('should render the input and button', () => {
    setup()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('should update inputText state on input change', () => {
    setup()
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'new search term' } })
    expect(input).toHaveValue('new search term')
  })

  it('should call router.push with the correct query string on form submit', async () => {
    setup()
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /search/i })

    fireEvent.change(input, { target: { value: 'search term' } })
    fireEvent.click(button)

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/foo-path?search=search+term')
    })
  })

  it('should call router.push with the pathname only when input is empty on form submit', async () => {
    setup()
    const button = screen.getByRole('button', { name: /search/i })

    fireEvent.click(button)

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/foo-path')
    })
  })
})
