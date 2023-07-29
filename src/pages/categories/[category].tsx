import Product from '@/components/ui/product';
import { Container, Divider, Grid, Group, Title } from '@mantine/core';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { TProduct } from '..';
import { products } from '../api/products';

export const getStaticPaths: GetStaticPaths = () => {
  const categories = products
    .filter((p, i) => (i % 2 === 0 ? p.category : false))
    .map((p) => p.category);

  return {
    paths: categories.map((c) => ({
      params: { category: c },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  products: TProduct[];
}> = (context) => {
  return {
    props: {
      products: products.filter(
        (p) =>
          p.category.toLowerCase().replace(' ', '-') ===
          context?.params?.category
      ),
    },
  };
};

const Category = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Group mb={'sm'}>
        <Divider
          size={'lg'}
          color="blue.6"
          w={75}
          sx={(theme) => ({ borderRadius: theme.spacing.lg })}
        />
        <Title order={3} fw={400} fz={26}>
          {(products && products[0]?.category) || 'Default Category'}
        </Title>
      </Group>
      <Grid gutterXs="md" gutterMd="xl" gutterXl={50}>
        {products?.map((product) => {
          return (
            <Grid.Col sm={6} key={product.id}>
              <Product product={product} type="categories" />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Category;
