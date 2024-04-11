import { ProductDto } from '@/features/product/domain/product.dto'

export class ProductMother {
  static Product: ProductDto = {
    id: 1,
    title: 'foo title',
    description: 'foo description',
    category: {
      creationAt: '2024-04-10T15:50:26.000Z',
      id: 1,
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      name: 'Clothes',
      updatedAt: '2024-04-10T15:50:26.000Z',
    },
    images: ['foo-image'],
    price: 966,
    updatedAt: '2024-04-11T08:31:18.000Z',
    creationAt: '2024-04-11T05:43:56.000Z',
  }
}
