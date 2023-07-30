import { getCategories } from '@/util/products';
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Loader,
  Stack,
  Table,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

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
  const selectedProducts = useSelector((state: RootState) => state.pcbuilder);
  const isSelectedProductsFromEachCategory =
    selectedProducts.length === categories.length;

  const totalPrice = useMemo(() => {
    return selectedProducts.reduce((acc, curr) => acc + curr.price, 0);
  }, [selectedProducts]);

  if (status === 'loading') {
    return <Loader />;
  }

  const handleCompleteBuild = () => {
    notifications.show({
      title: 'Complete Build',
      message: "You've created a awesome build 💻",
      icon: <IconCheck />,
    });
  };

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
          <Text color="dimmed" mt={-10} mb={4}>
            (select a product from each category to complete the build)
          </Text>
          <Table striped highlightOnHover withBorder withColumnBorders>
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {!selectedProducts.length ? (
                <tr>
                  <td colSpan={3}>No product is selected</td>
                </tr>
              ) : (
                <>
                  {selectedProducts.map((p) => {
                    return (
                      <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.category}</td>
                        <td>${p.price}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td></td>
                    <td>Total Price</td>
                    <td>${totalPrice}</td>
                  </tr>
                </>
              )}
            </tbody>
          </Table>
          <Flex mt={8} justify={'end'}>
            {isSelectedProductsFromEachCategory ? (
              <Button onClick={handleCompleteBuild}>Complete Build</Button>
            ) : (
              <Tooltip
                label={
                  'Please select a product from each category to complete the build'
                }
              >
                <Button variant="light" sx={{ cursor: 'not-allowed' }}>
                  Complete Build
                </Button>
              </Tooltip>
            )}
          </Flex>
        </Box>
      </Stack>
    </Container>
  );
};

export default PCBuilder;
