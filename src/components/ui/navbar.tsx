import {
  ActionIcon,
  Affix,
  Avatar,
  Box,
  Burger,
  Button,
  Container,
  Flex,
  Group,
  Header,
  Menu,
  Paper,
  Text,
  Tooltip,
  Transition,
  createStyles,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
  IconDeviceDesktop,
  IconMoonStars,
  IconSun,
} from '@tabler/icons-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Spinner from './spinner';

const categories: { link: string; label: string }[] = [
  {
    label: 'CPU',
    link: '/categories/cpu',
  },
  {
    label: 'Motherboard',
    link: '/categories/motherboard',
  },
  {
    label: 'RAM',
    link: '/categories/ram',
  },
  {
    label: 'Power Supply',
    link: '/categories/power-supply',
  },
  {
    label: 'Storage',
    link: '/categories/storage',
  },
  {
    label: 'Monitor',
    link: '/categories/monitor',
  },
];

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 10,
  },
  logo: {
    color: theme.colors.blue[6],
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  links: {
    '& a': {
      textDecoration: 'none',
      fontWeight: 400,
    },
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
    [theme.fn.largerThan('sm')]: {
      fontSize: theme.fontSizes.md,
      fontWeight: 600,
    },
  },

  linkAlike: {
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
    [theme.fn.largerThan('sm')]: {
      fontSize: theme.fontSizes.md,
      fontWeight: 600,
    },
  },

  linkActive: {
    backgroundColor: theme.primaryColor,
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'subtle', color: theme.primaryColor })
        .color,
    },
  },
}));

const Navbar = () => {
  const [opened, { close, toggle }] = useDisclosure(false);
  const [active, setActive] = useState('home');
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { asPath } = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    if (asPath === '/') {
      setActive('home');
    } else if (asPath === '/pc-builder') {
      setActive('pc-builder');
    } else if (asPath.includes('/products/')) {
      setActive('products');
    } else if (asPath.includes('/categories/')) {
      setActive(asPath.split('/')[2]);
    }
  }, [asPath]);

  if (status === 'loading') {
    return <Spinner />;
  }

  const items = (
    <>
      <Link
        key={'home'}
        href={'/'}
        className={cx(classes.link, {
          [classes.linkActive]: active === 'home',
        })}
        onClick={() => {
          setActive('home');
          close();
        }}
      >
        Home
      </Link>
      <Link
        key={'pc-builder'}
        href={'/pc-builder'}
        className={cx(classes.link, {
          [classes.linkActive]: active === 'pc-builder',
        })}
        onClick={() => {
          setActive('pc-builder');
          close();
        }}
      >
        PC Builder
      </Link>
      <Link
        key={'products'}
        href={'/products'}
        className={cx(classes.link, {
          [classes.linkActive]: active === 'products',
        })}
        onClick={() => {
          setActive('products');
          close();
        }}
      >
        Products
      </Link>

      <Box className={classes.linkAlike}>
        <Menu
          width={140}
          trigger="hover"
          key={'menu'}
          withinPortal
          position="top-start"
        >
          <Menu.Target>
            <Flex align={'center'} gap={4} style={{ cursor: 'pointer' }}>
              <Text fw={400}>Categories</Text>
              <IconChevronDown size={15} />
            </Flex>
          </Menu.Target>
          <Menu.Dropdown>
            {categories.map((category) => (
              <Menu.Item
                key={category.label}
                component={Link}
                href={category.link}
                className={cx(classes.link, {
                  [classes.linkActive]:
                    active.toLowerCase() ===
                    category.label.toLowerCase().replace(' ', '-'),
                })}
                style={{ fontWeight: 400 }}
                onClick={() => {
                  setActive(category.label);
                  close();
                }}
              >
                {category.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Box>
      {data?.user ? (
        <Group spacing={6} className={classes.linkAlike}>
          <Avatar
            src={data.user.image}
            alt={data.user.name as string}
            radius={'xl'}
            size={25}
          />
          <Text>{data.user.name}</Text>
        </Group>
      ) : null}

      <Box className={classes.linkAlike}>
        {data?.user ? (
          <Button onClick={() => signOut({ redirect: false })}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn()}>Sign In</Button>
        )}
      </Box>
    </>
  );

  return (
    <Header height={HEADER_HEIGHT} mb={rem(20)} className={`${classes.root}`}>
      <Container className={classes.header}>
        <IconDeviceDesktop size={28} className={classes.logo} />
        <Group spacing={'lg'} className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} />
        <Transition
          mounted={opened}
          transition={'pop-top-left'}
          duration={200}
          timingFunction={'ease'}
        >
          {(styles) => (
            <Paper style={styles} className={classes.dropdown}>
              {items}
            </Paper>
          )}
        </Transition>
        <Affix position={{ bottom: rem(20), right: rem(20) }}>
          <Transition transition="slide-up" mounted>
            {(transitionStyles) => (
              <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                style={transitionStyles}
              >
                <Tooltip label="Toggle color theme" position="left" offset={12}>
                  {dark ? (
                    <IconSun size="1.1rem" />
                  ) : (
                    <IconMoonStars size="1.1rem" />
                  )}
                </Tooltip>
              </ActionIcon>
            )}
          </Transition>
        </Affix>
      </Container>
    </Header>
  );
};

export default Navbar;
