import { TProduct } from '@/pages';
import { Divider, Grid, Group, Title } from '@mantine/core';
import Product from './product';

const FeaturedProducts = ({ products }: { products: TProduct[] }) => {
  return (
    <>
      <Group mb={'sm'}>
        <Divider
          size={'lg'}
          color="blue.6"
          w={75}
          sx={(theme) => ({ borderRadius: theme.spacing.lg })}
        />
        <Title order={3} fw={400} fz={26}>
          Featured Products
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
    </>
  );
};

export default FeaturedProducts;
