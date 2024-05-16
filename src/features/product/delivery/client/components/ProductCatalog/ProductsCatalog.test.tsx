import { render, screen, waitFor } from '@testing-library/react'
import { ProductsCatalog } from '@/features/product/delivery/client/components/ProductCatalog/ProductsCatalog'
import { resolveServerComponent } from '@/features/core/test/resolve-server-component'

describe('ProductsCatalog', () => {
  const setup = async (filter?: string) => {
    const RenderedProductsCatalog = await resolveServerComponent<{
      filter: string
    }>(ProductsCatalog, { filter: filter ?? '' })
    render(<RenderedProductsCatalog />)
  }
  it('should render product list', async () => {
    setup()

    await waitFor(() => {
      expect(screen.getAllByTestId('product-card')).toHaveLength(9)
    })
  })

  it('should show product list filtered', async () => {
    setup('Mountain')

    await waitFor(() => {
      expect(screen.getByText('Mountain Landscape')).toBeInTheDocument()
    })
  })
})
