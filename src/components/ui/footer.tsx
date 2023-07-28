import { Container, Footer, Group, createStyles, rem } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconDeviceDesktop,
} from '@tabler/icons-react';

const FOOTER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  logo: {
    color: theme.colors.blue[6],
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  twitter: {
    color: theme.colors.blue[6],
  },
  whatsapp: {
    color: theme.colors.green[7],
  },
  facebook: {
    color: theme.colors.blue[8],
  },
}));

const MyFooter = () => {
  const { classes } = useStyles();
  return (
    <Footer height={FOOTER_HEIGHT} mt={rem(30)}>
      <Container className={classes.footer}>
        <IconDeviceDesktop size={28} className={classes.logo} />
        <Group>
          <IconBrandTwitter className={classes.twitter} />
          <IconBrandWhatsapp className={classes.whatsapp} />
          <IconBrandFacebook className={classes.facebook} />
        </Group>
      </Container>
    </Footer>
  );
};

export default MyFooter;
