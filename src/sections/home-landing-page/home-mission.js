import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/system';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeMission() {
  const theme = useTheme();
  // eslint-disable-next-line no-unused-vars
  const mdUp = useResponsive('up', 'md');
  // eslint-disable-next-line no-unused-vars
  const lightMode = theme.palette.mode === 'light';

  // const shadow = `-40px 40px 80px ${alpha(
  //   lightMode ? theme.palette.grey[500] : theme.palette.common.black,
  //   0.24
  // )}`;

  // eslint-disable-next-line no-unused-vars
  const renderBtn = (
    <Button
      color="inherit"
      size="large"
      variant="outlined"
      target="_blank"
      rel="noopener"
      href={paths.zoneUI}
      endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
    >
      Visit Zone Landing Page
    </Button>
  );

  const renderDescription = (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      {/* <m.div variants={varFade().inDown}>
        <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
          Looking For a
        </Typography>
      </m.div> */}

      <m.div variants={varFade().inDown}>
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: { md: 5 },
          }}
        >
          Mission
        </Typography>
      </m.div>
      {/* <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
        At BharatBidding, our mission is to provide businesses with a reliable and efficient platform to outsource products and services. We believe in building long-term relationships with our clients and providing them with the best possible service.
      </Typography> */}
      <m.div variants={varFade().inRight}>
        <Typography
          sx={{
            color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
          }}
        >
          Are you looking for a reliable B2B marketplace to outsource products and services? Look no further than BharatBidding! Our platform connects businesses with other businesses to buy and sell products and services. We offer a wide range of products and services to meet your business needs.
        </Typography>
      </m.div>

      {/* {mdUp && <m.div variants={varFade().inDown}> {renderBtn} </m.div>} */}
    </Stack>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 5, md: 0 }}>
        <Grid xs={12} md={4}>
          {renderDescription}
        </Grid>

        <Grid xs={12} md={7}>
          <m.div variants={varFade().inUp}>
            <Image disabledEffect alt="rocket" src="/assets/images/home/zone_landing.webp" />
          </m.div>
        </Grid>

        {/* {!mdUp && (
          <Grid xs={12} sx={{ textAlign: 'center' }}>
            {renderBtn}
          </Grid>
        )} */}
      </Grid>
    </Container>
  );
}
