import {
  Badge,
  Card,
  Container,
  Divider,
  Group,
  Paper,
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
      <Group mb={'sm'} mt={'lg'}>
        <Divider
          size={'lg'}
          color="blue.6"
          w={75}
          sx={(theme) => ({ borderRadius: theme.spacing.lg })}
        />
        <Title order={3} fw={400} fz={26}>
          {name}
        </Title>
      </Group>
      <Card withBorder>
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
      <Group mb={'sm'} mt={'lg'}>
        <Divider
          size={'lg'}
          color="blue.6"
          w={75}
          sx={(theme) => ({ borderRadius: theme.spacing.lg })}
        />
        <Title order={3} fw={400} fz={26}>
          Reviews of {name}
        </Title>
      </Group>
      <Stack>
        <Paper withBorder p={'md'}>
          <Group position="apart">
            <Group>
              <Skeleton w={40} height={40} animate={false} radius={'xl'} />
              <Text>Rakib Ahmed</Text>
            </Group>
            <Rating value={4.5} fractions={10} />
          </Group>
          <Text mt={'xs'}>This is a good product</Text>
        </Paper>
        <Paper withBorder p={'md'}>
          <Group position="apart">
            <Group>
              <Skeleton w={40} height={40} animate={false} radius={'xl'} />
              <Text>Sabbir Ahmed</Text>
            </Group>
            <Rating value={4.8} fractions={10} />
          </Group>
          <Text mt={'xs'}>Awesome product</Text>
        </Paper>
        <Paper withBorder p={'md'}>
          <Group position="apart">
            <Group>
              <Skeleton w={40} height={40} animate={false} radius={'xl'} />
              <Text>Rafin Ahmed</Text>
            </Group>
            <Rating value={5} fractions={10} />
          </Group>
          <Text mt={'xs'}>The Ultimate Gaming Companion</Text>
        </Paper>
      </Stack>
    </Container>
  );
};

export default Product;
