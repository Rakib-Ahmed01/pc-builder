import FeaturedCategories from '@/components/ui/featuredCategories';
import FeaturedProducts from '@/components/ui/featuredProducts';
import { Container } from '@mantine/core';
import { products } from './api/products';

export type Product = {
  name: string;
  image: string;
  category: string;
  status: string;
  keyFeatures: string[];
  individualRating: number;
  averageRating: number;
  reviews: never[];
  price: number;
};

export default function Home({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  return (
    <main>
      <Container>
        <FeaturedProducts products={products} />
        <FeaturedCategories categories={categories} />
      </Container>
    </main>
  );
}

export function getStaticProps() {
  return {
    props: {
      products: products.slice(0, 6),
      categories: products
        .filter((p, i) => (i % 2 === 0 ? p.category : false))
        .map((p) => p.category),
    },
  };
}
