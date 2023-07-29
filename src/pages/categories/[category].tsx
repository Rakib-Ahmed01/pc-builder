import Product from '@/components/ui/product';
import { TProduct } from '@/types/product';
import { getCategories, getProductByCategory } from '@/util/products';
import { Container, Divider, Grid, Group, Title } from '@mantine/core';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();

  return {
    paths: categories.map((c) => ({
      params: { category: c },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  products: TProduct[];
}> = async (context) => {
  const products = await getProductByCategory(
    (context?.params?.category as string).replace('-', ' ')
  );
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
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
          {(products && products[0]?.category) || ''}
        </Title>
      </Group>
      <Grid gutterXs="md" gutterMd="xl" gutterXl={50}>
        {products?.map((product) => {
          return (
            <Grid.Col sm={6} key={product?._id}>
              <Product product={product} type="categories" />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Category;
