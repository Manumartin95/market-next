import { HttpProductDto } from '@/features/product/infrastructure/dtos/http-product.dto'

export class ProductMother {
  static Product: HttpProductDto = {
    id: 1,
    title: 'Mountain Landscape',
    description: 'A breathtaking view of mountains',
    category: {
      id: 1,
      name: 'Nature',
    },
    images: ['https://source.unsplash.com/featured/?mountains'],
    price: 150,
    updatedAt: '2024-04-11T08:31:18.000Z',
    creationAt: '2024-04-11T05:43:56.000Z',
  }

  static ProductList: HttpProductDto[] = [
    {
      id: 1,
      title: 'Mountain Landscape',
      description: 'A breathtaking view of mountains',
      category: {
        id: 1,
        name: 'Nature',
      },
      images: ['https://source.unsplash.com/featured/?mountains'],
      price: 150,
      updatedAt: '2024-04-11T08:31:18.000Z',
      creationAt: '2024-04-11T05:43:56.000Z',
    },
    {
      id: 2,
      title: 'Beach Sunset',
      description: 'A beautiful sunset at the beach',
      category: {
        id: 2,
        name: 'Travel',
      },
      images: ['https://source.unsplash.com/featured/?beach'],
      price: 200,
      updatedAt: '2024-04-10T09:15:42.000Z',
      creationAt: '2024-04-10T07:22:33.000Z',
    },
    {
      id: 3,
      title: 'Coffee Cup',
      description: 'A close-up of a steaming cup of coffee',
      category: {
        id: 3,
        name: 'Food & Drink',
      },
      images: ['https://source.unsplash.com/featured/?coffee'],
      price: 20,
      updatedAt: '2024-04-09T11:57:29.000Z',
      creationAt: '2024-04-08T14:10:20.000Z',
    },
    {
      id: 4,
      title: 'City Skyline',
      description: 'A panoramic view of a city skyline at night',
      category: {
        id: 4,
        name: 'City',
      },
      images: ['https://source.unsplash.com/featured/?city'],
      price: 300,
      updatedAt: '2024-04-08T17:29:14.000Z',
      creationAt: '2024-04-07T20:01:05.000Z',
    },
    {
      id: 5,
      title: 'Golden Retriever Puppy',
      description: 'An adorable golden retriever puppy',
      category: {
        id: 5,
        name: 'Animals',
      },
      images: ['https://source.unsplash.com/featured/?dog'],
      price: 500,
      updatedAt: '2024-04-07T13:40:55.000Z',
      creationAt: '2024-04-06T16:55:41.000Z',
    },
    {
      id: 6,
      title: 'Abstract Art',
      description: 'Colorful abstract artwork',
      category: {
        id: 6,
        name: 'Art',
      },
      images: ['https://source.unsplash.com/featured/?art'],
      price: 1000,
      updatedAt: '2024-04-06T10:22:30.000Z',
      creationAt: '2024-04-05T15:18:22.000Z',
    },
    {
      id: 7,
      title: 'Vintage Car',
      description: 'A classic vintage car on a deserted road',
      category: {
        id: 7,
        name: 'Vintage',
      },
      images: ['https://source.unsplash.com/featured/?car'],
      price: 800,
      updatedAt: '2024-04-05T08:49:47.000Z',
      creationAt: '2024-04-04T12:30:39.000Z',
    },
    {
      id: 8,
      title: 'Fruit Bowl',
      description: 'A bowl filled with fresh fruits',
      category: {
        id: 8,
        name: 'Healthy Living',
      },
      images: ['https://source.unsplash.com/featured/?fruit'],
      price: 30,
      updatedAt: '2024-04-04T07:11:55.000Z',
      creationAt: '2024-04-03T10:05:48.000Z',
    },
    {
      id: 9,
      title: 'Hiking Trail',
      description: 'A scenic hiking trail through the forest',
      category: {
        id: 9,
        name: 'Outdoor',
      },
      images: ['https://source.unsplash.com/featured/?hiking'],
      price: 80,
      updatedAt: '2024-04-03T15:36:02.000Z',
      creationAt: '2024-04-02T18:45:59.000Z',
    },
    {
      id: 10,
      title: 'Abstract Architecture',
      description: 'Futuristic abstract architecture',
      category: {
        id: 10,
        name: 'Architecture',
      },
      images: ['https://source.unsplash.com/featured/?architecture'],
      price: 700,
      updatedAt: '2024-04-02T11:25:14.000Z',
      creationAt: '2024-04-01T14:19:07.000Z',
    },
  ]
}
