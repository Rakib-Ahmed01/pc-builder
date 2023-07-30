import { Box, Loader } from '@mantine/core';

const Spinner = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        zIndex: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader />
    </Box>
  );
};

export default Spinner;
