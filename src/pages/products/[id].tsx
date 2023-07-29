import {
  Badge,
  Card,
  Container,
  Group,
  Rating,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { TProduct } from '..';
import { products } from '../api/products';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: products.map((p) => ({
      params: { id: p.id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  product: TProduct;
}> = (context) => {
  return {
    props: {
      product: products.filter(
        (p) => p.id.toString() === context?.params?.id
      )[0],
    },
  };
};

const Product = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    averageRating,
    category,
    image,
    individualRating,
    keyFeatures,
    name,
    price,
    reviews,
    status,
    description,
  } = product || {};
  return (
    <Container>
      <Title order={3} fw={400} fz={26} ta={'center'} mb={8}>
        {product && product.name}
      </Title>
      <Card
        sx={(theme) => ({
          // maxWidth: theme.breakpoints.sm,
          margin: '0 auto',
        })}
        withBorder
      >
        <Card.Section>
          <Skeleton h={250} animate={false} sx={{ borderRadius: 0 }} />
        </Card.Section>
        <Stack py={'sm'} spacing={'xs'}>
          <Group>
            <Title order={4}> {name}</Title>
            {status === 'In Stock' ? (
              <Badge>{status}</Badge>
            ) : (
              <Badge color="red">{status}</Badge>
            )}
          </Group>
          <Stack spacing={4}>
            <Text>{description}</Text>
            <Text>Price: ${price}</Text>
            <Text>Category: {category}</Text>
            <Text>Key Features: {keyFeatures?.join(', ')}</Text>
            <Group spacing={4}>
              <Text>Rating: </Text>
              <Rating value={averageRating} fractions={10} />
            </Group>
            <Group spacing={4}>
              <Text>Your Rating: </Text>
              <Rating value={individualRating} fractions={10} />
            </Group>
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
};

export default Product;
