import { Container, Loader } from '@mantine/core';
import { signIn, useSession } from 'next-auth/react';

const PCBuilder = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => signIn(),
  });

  if (status === 'loading') {
    return <Loader />;
  }

  return <Container>PC Builder</Container>;
};

export default PCBuilder;
