import { Product } from '@/pages';
import {
  Badge,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const FeaturedProducts = ({ products }: { products: Product[] }) => {
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
    </>
  );
};

export default FeaturedProducts;
