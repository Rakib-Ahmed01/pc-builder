import type { NextApiRequest, NextApiResponse } from 'next';

export let products = [
  {
    name: 'Intel Core i9-11900K',
    image: 'https://m.media-amazon.com/images/I/71dtRLoVWUL.jpg',
    category: 'CPU',
    status: 'In Stock',
    keyFeatures: [
      '8 cores, 16 threads',
      '3.5GHz base clock',
      '5.3GHz boost clock',
    ],
    individualRating: 5,
    averageRating: 4.7,
    reviews: [],
    price: 399.99,
  },
  {
    name: 'AMD Ryzen 7 5800X',
    image: 'https://example.com/cpu2.jpg',
    category: 'CPU',
    status: 'Out Of Stock',
    keyFeatures: [
      '8 cores, 16 threads',
      '3.8GHz base clock',
      '4.7GHz boost clock',
    ],
    individualRating: 4,
    averageRating: 4.2,
    reviews: [],
    price: 379.99,
  },
  {
    name: 'ASUS ROG Strix Z590-E',
    image: 'https://example.com/motherboard1.jpg',
    category: 'Motherboard',
    status: 'In Stock',
    keyFeatures: ['ATX Form Factor', 'LGA 1200 socket', 'PCIe 4.0 support'],
    individualRating: 4,
    averageRating: 4.5,
    reviews: [],
    price: 299.99,
  },
  {
    name: 'GIGABYTE B550 AORUS Elite',
    image: 'https://example.com/motherboard2.jpg',
    category: 'Motherboard',
    status: 'In Stock',
    keyFeatures: ['ATX Form Factor', 'AM4 socket', 'PCIe 4.0 support'],
    individualRating: 3,
    averageRating: 3.8,
    reviews: [],
    price: 179.99,
  },

  {
    name: 'LG 27GL850-B',
    image: 'https://example.com/monitor1.jpg',
    category: 'Monitor',
    status: 'In Stock',
    keyFeatures: ['27-inch QHD IPS', '144Hz refresh rate', '1ms response time'],
    individualRating: 5,
    averageRating: 4.9,
    reviews: [],
    price: 399.99,
  },
  {
    name: 'ASUS TUF Gaming VG27AQ',
    image: 'https://example.com/monitor2.jpg',
    category: 'Monitor',
    status: 'In Stock',
    keyFeatures: ['27-inch QHD IPS', '165Hz refresh rate', '1ms response time'],
    individualRating: 4,
    averageRating: 4.2,
    reviews: [],
    price: 349.99,
  },

  {
    name: 'Corsair Vengeance RGB Pro',
    image: 'https://example.com/ram1.jpg',
    category: 'RAM',
    status: 'In Stock',
    keyFeatures: ['32GB (2x16GB) DDR4 3200MHz', 'CL16', 'RGB lighting'],
    individualRating: 5,
    averageRating: 4.8,
    reviews: [],
    price: 189.99,
  },
  {
    name: 'G.SKILL Ripjaws V Series',
    image: 'https://example.com/ram2.jpg',
    category: 'RAM',
    status: 'In Stock',
    keyFeatures: ['16GB (2x8GB) DDR4 3600MHz', 'CL16', 'No RGB'],
    individualRating: 4,
    averageRating: 4.1,
    reviews: [],
    price: 89.99,
  },
  {
    name: 'EVGA Supernova 750 G5',
    image: 'https://example.com/psu1.jpg',
    category: 'Power Supply',
    status: 'In Stock',
    keyFeatures: ['750W', '80 PLUS Gold', 'Fully Modular'],
    individualRating: 3,
    averageRating: 3.5,
    reviews: [],
    price: 119.99,
  },
  {
    name: 'Corsair RM750x',
    image: 'https://example.com/psu2.jpg',
    category: 'Power Supply',
    status: 'In Stock',
    keyFeatures: ['750W', '80 PLUS Gold', 'Fully Modular'],
    individualRating: 5,
    averageRating: 4.7,
    reviews: [],
    price: 139.99,
  },
  {
    name: 'Samsung 970 EVO Plus',
    image: 'https://example.com/storage1.jpg',
    category: 'Storage',
    status: 'In Stock',
    keyFeatures: [
      '1TB NVMe M.2',
      'Read up to 3500MB/s',
      'Write up to 3300MB/s',
    ],
    individualRating: 4,
    averageRating: 4.3,
    reviews: [],
    price: 199.99,
  },
  {
    name: 'Crucial MX500',
    image: 'https://example.com/storage2.jpg',
    category: 'Storage',
    status: 'In Stock',
    keyFeatures: ['1TB SATA SSD', 'Read up to 560MB/s', 'Write up to 510MB/s'],
    individualRating: 5,
    averageRating: 4.8,
    reviews: [],
    price: 99.99,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { ...query } = req.query;
  if (query?.limit) {
    products = products.slice(0, Number(query?.limit) || 10000).map((p) => p);
  }
  console.log(products.length);
  res.status(200).json(products);
}