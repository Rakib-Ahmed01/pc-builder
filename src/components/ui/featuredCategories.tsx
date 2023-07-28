import {
  Card,
  Divider,
  Grid,
  Group,
  Skeleton,
  Stack,
  Title,
} from '@mantine/core';
import Link from 'next/link';

const FeaturedCategories = ({ categories }: { categories: string[] }) => {
  return (
    <>
      <Group mb={'sm'} mt={'lg'}>
        <Divider
          size={'lg'}
          color="blue.6"
          w={75}
          sx={(theme) => ({ borderRadius: theme.spacing.lg })}
        />
        <Title order={3} fw={400} fz={26}>
          Featured Categories
        </Title>
      </Group>
      <Grid gutterXs="md" gutterMd="xl" gutterXl={50}>
        {categories.map((category) => {
          return (
            <Grid.Col sm={6} md={4} key={category}>
              <Card
                withBorder
                w={'100%'}
                m={0}
                p={0}
                component={Link}
                href={`/categories/${category.toLowerCase().replace(' ', '-')}`}
              >
                <Card.Section>
                  <Skeleton h={180} animate={false} />
                </Card.Section>
                <Stack p={'sm'} spacing={'xs'}>
                  <Group>
                    <Title order={4}> {category}</Title>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default FeaturedCategories;
