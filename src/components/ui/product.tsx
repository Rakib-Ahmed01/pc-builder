import { addProduct } from '@/pages/store/slices/pcbuilder/pcbuilderSlice';
import { RootState } from '@/pages/store/store';
import { TProduct } from '@/types/product';
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
import { notifications } from '@mantine/notifications';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Product = ({
  type,
  product,
}: {
  product: TProduct;
  type: 'home' | 'categories';
}) => {
  const { averageRating, category, keyFeatures, name, price, status, _id } =
    product || {};
  const selectedProducts = useSelector((state: RootState) => state.pcbuilder);
  const dispatch = useDispatch();
  const router = useRouter();

  const selectedProductsIds = useMemo(() => {
    return selectedProducts.slice().map((p) => p.id);
  }, [selectedProducts]);

  const handleAddProduct = (product: TProduct) => {
    dispatch(
      addProduct({
        id: product._id,
        category: product.category,
        name: product.name,
        price: product.price,
      })
    );
    notifications.show({
      title: `${product.category} Added`,
      message: `You've choosen ${product.name}`,
    });
    router.push('/pc-builder');
  };

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
          <Button variant="light" component={Link} href={`/products/${_id}`}>
            Details
          </Button>
        ) : status.includes('out') ||
          status.includes('Out') ||
          status.includes('OUT') ? (
          <Button fw={400} variant="light" color="red.6">
            Product is out of stock
          </Button>
        ) : selectedProductsIds.includes(product._id) ? (
          <Button fw={400} variant="light">
            Product is already added
          </Button>
        ) : (
          <Button fw={400} onClick={() => handleAddProduct(product)}>
            Add To PC Builder
          </Button>
        )}
      </Stack>
    </Card>
  );
};

export default Product;
