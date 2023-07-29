import { TProduct } from '@/pages';
import {
  Badge,
  Button,
  Card,
  Group,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Link from 'next/link';

const Product = ({
  type,
  product,
}: {
  product: TProduct;
  type: 'home' | 'categories';
}) => {
  const { averageRating, category, keyFeatures, name, price, status, id } =
    product || {};
  return (
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
          <Text color="dimmed">Key Features: {keyFeatures.join(', ')}</Text>
        </Stack>
        {type === 'home' ? (
          <Button variant="light" component={Link} href={`/products/${id}`}>
            Details
          </Button>
        ) : (
          <Button fw={500}>Add to PC Builder</Button>
        )}
      </Stack>
    </Card>
  );
};

export default Product;
