import { getCategories } from '@/util/products';
import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  Group,
  Loader,
  Stack,
  Table,
  Title,
} from '@mantine/core';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

export const getServerSideProps = async () => {
  const categories = await getCategories();

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
};

const PCBuilder = ({ categories }: { categories: string[] }) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => signIn(),
  });

  if (status === 'loading') {
    return <Loader />;
  }

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
          PC Builder
        </Title>
      </Group>

      <Stack>
        <Box>
          <Title order={3} fw={400} mb={4}>
            Choose products from category
          </Title>
          <Flex gap={'sm'} wrap={'wrap'}>
            {categories.map((c) => {
              return (
                <Badge
                  key={c}
                  component={Link}
                  href={`/categories/${c}`}
                  sx={{ cursor: 'pointer' }}
                >
                  {c}
                </Badge>
              );
            })}
          </Flex>
        </Box>
        <Box>
          <Title order={3} fw={400} mb={4}>
            Selected products
          </Title>
          <Table striped highlightOnHover withBorder withColumnBorders>
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Price</th>
              </tr>
            </thead>
          </Table>
        </Box>
      </Stack>
    </Container>
  );
};

export default PCBuilder;
