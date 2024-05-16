import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {ProductSearchBar} from '@/features/product/delivery/client/components/ProductSearchBar/ProductSearchBar'

// Mock next/navigation

const pushSpy = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: () => pushSpy,
  }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams('')),
  usePathname: jest.fn().mockReturnValue('/foo-path'),
}))

describe('ProductSearchBar', () => {
  const setup = () => {
    render(<ProductSearchBar />)
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

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

  it('should call router.push with the correct query string on form submit', () => {
    setup()
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /search/i })

    fireEvent.change(input, { target: { value: 'search term' } })
    fireEvent.click(button)

    waitFor(() => {
      expect(pushSpy).toHaveBeenCalledWith('/foo-path?search=search+term')
    })
  })

  it('should call router.push with the pathname only when input is empty on form submit', () => {
    setup()
    const button = screen.getByRole('button', { name: /search/i })

    fireEvent.click(button)

    waitFor(() => {
      expect(pushSpy).toHaveBeenCalledWith('/foo-path')
    })
  })
})
