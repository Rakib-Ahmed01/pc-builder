import { Carousel } from '@mantine/carousel';
import { Box, Skeleton } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const Banner = () => {
  return (
    <Box sx={{ width: '100%', height: '400px', display: 'flex' }} mb={'md'}>
      <Carousel
        withIndicators
        height="100%"
        sx={{ flex: 1 }}
        loop
        nextControlIcon={<IconArrowRight size={16} />}
        previousControlIcon={<IconArrowLeft size={16} />}
      >
        <Carousel.Slide>
          <Skeleton h={'100%'} animate={false}>
            1
          </Skeleton>
        </Carousel.Slide>
        <Carousel.Slide>
          <Skeleton h={'100%'} animate={false}>
            2
          </Skeleton>
        </Carousel.Slide>
        <Carousel.Slide>
          <Skeleton h={'100%'} animate={false}>
            3
          </Skeleton>
        </Carousel.Slide>
        <Carousel.Slide>
          <Skeleton h={'100%'} animate={false}>
            4
          </Skeleton>
        </Carousel.Slide>
      </Carousel>
    </Box>
  );
};

export default Banner;
