import type { NextApiRequest, NextApiResponse } from 'next';

export let products = [
  {
    id: 1,
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
    description:
      "The Intel Core i9-11900K is a high-performance CPU designed for gamers and content creators. With 8 cores and 16 threads, it offers exceptional multitasking capabilities. The base clock of 3.5GHz and a boost clock of 5.3GHz ensure swift and seamless processing. Whether you're gaming, streaming, or running resource-intensive applications, this CPU delivers top-notch performance.",
  },
  {
    id: 2,
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
    description:
      'The AMD Ryzen 7 5800X is a powerful CPU built to meet the demands of modern computing. With 8 cores and 16 threads, it delivers impressive performance for gaming and productivity tasks. The base clock of 3.8GHz and a boost clock of 4.7GHz provide smooth responsiveness. Though currently out of stock, this CPU is highly sought after by enthusiasts and gamers alike.',
  },
  {
    id: 3,
    name: 'ASUS ROG Strix Z590-E',
    image: 'https://example.com/motherboard1.jpg',
    category: 'Motherboard',
    status: 'In Stock',
    keyFeatures: ['ATX Form Factor', 'LGA 1200 socket', 'PCIe 4.0 support'],
    individualRating: 4,
    averageRating: 4.5,
    reviews: [],
    price: 299.99,
    description:
      'The ASUS ROG Strix Z590-E is a feature-packed motherboard designed for gaming enthusiasts and professionals. Supporting ATX form factor and LGA 1200 socket, it offers excellent compatibility and room for expansion. With PCIe 4.0 support, you can take advantage of lightning-fast data transfer speeds and cutting-edge peripherals.',
  },
  {
    id: 4,
    name: 'GIGABYTE B550 AORUS Elite',
    image: 'https://example.com/motherboard2.jpg',
    category: 'Motherboard',
    status: 'In Stock',
    keyFeatures: ['ATX Form Factor', 'AM4 socket', 'PCIe 4.0 support'],
    individualRating: 3,
    averageRating: 3.8,
    reviews: [],
    price: 179.99,
    description:
      'The GIGABYTE B550 AORUS Elite is a reliable motherboard for gaming and everyday computing needs. Featuring an ATX form factor and AM4 socket, it provides a solid foundation for your system. With PCIe 4.0 support, you can harness the power of the latest graphics cards and storage devices.',
  },
  {
    id: 5,
    name: 'LG 27GL850-B',
    image: 'https://example.com/monitor1.jpg',
    category: 'Monitor',
    status: 'In Stock',
    keyFeatures: ['27-inch QHD IPS', '144Hz refresh rate', '1ms response time'],
    individualRating: 5,
    averageRating: 4.9,
    reviews: [],
    price: 399.99,
    description:
      'The LG 27GL850-B is a premium monitor built for gamers and creative professionals. Its 27-inch QHD IPS display offers stunning visuals and accurate colors. With a 144Hz refresh rate and 1ms response time, you can enjoy fluid motion and responsiveness, making it ideal for fast-paced gaming and content creation.',
  },
  {
    id: 6,
    name: 'ASUS TUF Gaming VG27AQ',
    image: 'https://example.com/monitor2.jpg',
    category: 'Monitor',
    status: 'In Stock',
    keyFeatures: ['27-inch QHD IPS', '165Hz refresh rate', '1ms response time'],
    individualRating: 4,
    averageRating: 4.2,
    reviews: [],
    price: 349.99,
    description:
      'The ASUS TUF Gaming VG27AQ is a reliable and high-performing monitor suitable for gaming enthusiasts. The 27-inch QHD IPS panel ensures a detailed and immersive visual experience. Boasting a 165Hz refresh rate and 1ms response time, it offers smooth gameplay and reduced motion blur.',
  },
  {
    id: 7,
    name: 'Corsair Vengeance RGB Pro',
    image: 'https://example.com/ram1.jpg',
    category: 'RAM',
    status: 'In Stock',
    keyFeatures: ['32GB (2x16GB) DDR4 3200MHz', 'CL16', 'RGB lighting'],
    individualRating: 5,
    averageRating: 4.8,
    reviews: [],
    price: 189.99,
    description:
      'The Corsair Vengeance RGB Pro is a stylish and high-speed RAM kit designed for gamers and system builders. With 32GB (2x16GB) DDR4 3200MHz and CL16 latency, it provides ample memory for multitasking and gaming performance. The RGB lighting adds flair to your build.',
  },
  {
    id: 8,
    name: 'G.SKILL Ripjaws V Series',
    image: 'https://example.com/ram2.jpg',
    category: 'RAM',
    status: 'In Stock',
    keyFeatures: ['16GB (2x8GB) DDR4 3600MHz', 'CL16', 'RGB lighting'],
    individualRating: 4,
    averageRating: 4.1,
    reviews: [],
    price: 89.99,
    description:
      'The G.SKILL Ripjaws V Series offers a reliable and efficient RAM solution for budget-conscious gamers and PC builders. With 16GB (2x8GB) DDR4 3600MHz and CL16 latency, it delivers a solid balance of speed and capacity with RGB lighting.',
  },
  {
    id: 9,
    name: 'EVGA Supernova 750 G5',
    image: 'https://example.com/psu1.jpg',
    category: 'Power Supply',
    status: 'In Stock',
    keyFeatures: ['750W', '80 PLUS Gold', 'Fully Modular'],
    individualRating: 3,
    averageRating: 3.5,
    reviews: [],
    price: 119.99,
    description:
      'The EVGA Supernova 750 G5 is a 750W power supply that combines efficiency and performance. With an 80 PLUS Gold rating and fully modular design, it ensures stable power delivery and easy cable management for your gaming rig or workstation.',
  },
  {
    id: 10,
    name: 'Corsair RM750x',
    image: 'https://example.com/psu2.jpg',
    category: 'Power Supply',
    status: 'In Stock',
    keyFeatures: ['750W', '80 PLUS Gold', 'Fully Modular'],
    individualRating: 5,
    averageRating: 4.7,
    reviews: [],
    price: 139.99,
    description:
      'The Corsair RM750x is a high-quality power supply with a capacity of 750W. Boasting an 80 PLUS Gold rating and full modularity, it offers excellent efficiency and customizable cable arrangements. This power supply is a reliable choice for demanding gaming setups and workstations.',
  },
  {
    id: 11,
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
    description:
      'The Samsung 970 EVO Plus is a top-tier NVMe M.2 SSD that offers lightning-fast storage performance. With 1TB capacity and read speeds of up to 3500MB/s and write speeds of up to 3300MB/s, it ensures quick loading times and seamless data transfers for your games and applications.',
  },
  {
    id: 12,
    name: 'Crucial MX500',
    image: 'https://example.com/storage2.jpg',
    category: 'Storage',
    status: 'In Stock',
    keyFeatures: ['1TB SATA SSD', 'Read up to 560MB/s', 'Write up to 510MB/s'],
    individualRating: 5,
    averageRating: 4.8,
    reviews: [],
    price: 99.99,
    description:
      "The Crucial MX500 is a reliable SATA SSD that provides a cost-effective storage solution. With a 1TB capacity and read speeds of up to 560MB/s and write speeds of up to 510MB/s, it offers a significant performance boost compared to traditional hard drives. It's perfect for upgrading your laptop or desktop storage.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { ...query } = req.query;
  if (query?.limit) {
    products = products.slice(0, Number(query?.limit) || 10000).map((p) => p);
  }
  res.status(200).json(products);
}
