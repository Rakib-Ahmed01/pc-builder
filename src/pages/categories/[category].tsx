import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Product } from '..';
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
  products: Product[];
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

// const useStyles = createStyles((theme) => ({
//   productContainer: {
//     display: 'grid',
//     [theme.fn.largerThan('sm')]: {
//       gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
//     },
//     gridAutoRows: '1fr',
//   },
// }));

const Category = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const { classes } = useStyles();
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
          const { averageRating, category, keyFeatures, name, price, status } =
            product || {};
          return (
            <Grid.Col sm={6} key={name}>
              <Card withBorder w={'100%'} m={0} p={0}>
                <Card.Section>
                  <Skeleton h={180} animate={false} />
                </Card.Section>
                <Stack p={'md'} spacing={'xs'}>
                  <Group>
                    <Title order={4}> {name}</Title>
                    {status === 'In Stock' ? (
                      <Badge>{status}</Badge>
                    ) : (
                      <Badge color="red">{status}</Badge>
                    )}
                  </Group>
                  <Stack spacing={4}>
                    <Text color="dimmed">Price: ${price}</Text>
                    <Text color="dimmed">Category: {category}</Text>
                    <Text color="dimmed">Rating: {averageRating}</Text>
                    <Text color="dimmed">
                      Key Features: {keyFeatures.join(', ')}
                    </Text>
                  </Stack>
                  <Button variant="light">Details</Button>
                </Stack>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Category;
