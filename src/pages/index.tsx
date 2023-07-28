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
import { products } from './api/products';

type Product = {
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

export default function Home({ products }: { products: Product[] }) {
  return (
    <main>
      <Container>
        <Group mb={'sm'}>
          <Divider
            size={'lg'}
            color="blue.6"
            w={120}
            sx={(theme) => ({ borderRadius: theme.spacing.lg })}
          />
          <Title order={3} fw={500} fz={28}>
            Featured Products
          </Title>
        </Group>
        <Grid gutterXs="md" gutterMd="xl" gutterXl={50}>
          {products.map((product) => {
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
            } = product || {};
            return (
              <Grid.Col sm={6} key={product.name}>
                <Card withBorder w={'100%'} m={0} p={0}>
                  <Card.Section>
                    <Skeleton h={180} animate={false} />
                  </Card.Section>
                  <Stack p={'md'} spacing={'xs'}>
                    <Group>
                      <Title order={4}> {product.name}</Title>
                      {product.status === 'In Stock' ? (
                        <Badge>{product.status}</Badge>
                      ) : (
                        <Badge color="red">{product.status}</Badge>
                      )}
                    </Group>
                    <Stack spacing={4}>
                      <Text>Price: ${product.price}</Text>
                      <Text>Category: {product.category}</Text>
                      <Text>Rating: {product.averageRating}</Text>
                      <Text>
                        Key Features: {product.keyFeatures.join(', ')}
                      </Text>
                    </Stack>
                    <Button variant="light"> Details </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </main>
  );
}

export function getStaticProps() {
  return {
    props: { products: products.slice(0, 6) },
  };
}
