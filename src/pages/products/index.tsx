import Product from '@/components/ui/product';
import { Container, Divider, Grid, Group, Title } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { TProduct } from '..';
import { products } from '../api/products';

export const getStaticProps: GetStaticProps<{
  products: TProduct[];
}> = () => {
  return {
    props: {
      products,
    },
  };
};

const AllProducts = ({
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
          All Products
        </Title>
      </Group>
      <Grid gutterXs="md" gutterMd="xl" gutterXl={50}>
        {products.map((product) => {
          return (
            <Grid.Col sm={6} key={product.id}>
              <Product product={product} type="home" />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AllProducts;
