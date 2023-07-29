import Product from '@/components/ui/product';
import { TProduct } from '@/types/product';
import { getProducts } from '@/util/products';
import { Container, Divider, Grid, Group, Title } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps<{
  products: TProduct[];
}> = async () => {
  const products = await getProducts();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
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
            <Grid.Col sm={6} key={product._id}>
              <Product product={product} type="home" />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AllProducts;
