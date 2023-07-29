import FeaturedCategories from '@/components/ui/featuredCategories';
import FeaturedProducts from '@/components/ui/featuredProducts';
import { TProduct } from '@/types/product';
import { getCategories, getProducts } from '@/util/products';
import { Container } from '@mantine/core';

export default function Home({
  products,
  categories,
}: {
  products: TProduct[];
  categories: string[];
}) {
  return (
    <main style={{ position: 'relative' }}>
      <Container>
        <FeaturedProducts products={products} />
        <FeaturedCategories categories={categories} />
      </Container>
    </main>
  );
}

export async function getStaticProps() {
  const products = await getProducts(6);
  const categories = await getCategories();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
