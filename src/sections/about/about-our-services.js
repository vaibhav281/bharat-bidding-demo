
import { m } from 'framer-motion';

// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import  from '@mui/material/Container';
// import  from '@mui/material/Unstable_Grid2';
// import  from '@mui/material/Typography';
import {Container, Grid,List, ListItem, Typography} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
// import LinearProgress from '@mui/material/LinearProgress';

import { useResponsive } from 'src/hooks/use-responsive';

// import { fPercent } from 'src/utils/format-number';

// import Image from 'src/components/image';
// import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';


// ----------------------------------------------------------------------

export const SKILLS = [...Array(3)].map((_, index) => ({
  label: ['Development', 'Design', 'Marketing'][index],
  value: [20, 40, 60][index],
}));

// ----------------------------------------------------------------------

export default function AboutOurServices() {
  const theme = useTheme();
// eslint-disable-next-line no-unused-vars
  const mdUp = useResponsive('up', 'md');

  const lightMode = theme.palette.mode === 'light';
// eslint-disable-next-line no-unused-vars
  const shadow = `-40px 40px 80px ${alpha(
    lightMode ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 5 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start" >
        {/* {mdUp && (
          <Grid container xs={12} md={6} lg={7} alignItems="center" sx={{ pr: { md: 7 } }}>
            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="our office 2"
                  src="/assets/images/about/what_2.png"
                  ratio="1/1"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>

            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="our office 1"
                  src="/assets/images/about/what_1.png"
                  ratio="3/4"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>
          </Grid>
        )} */}

        <Grid xs={12} md={12} lg={12}  sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 1,textAlign: 'justify'  }}>
            Features of Bharat bidding
            </Typography>
          </m.div>

          <m.div variants={varFade().inLeft}>
            <List>
            <ListItem>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
              }}
            >
            Reliability: We are committed to providing our clients with reliable and efficient service.
            </Typography>
            </ListItem>
            <ListItem>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
              }}
              >
            Efficiency: Our platform is designed to be efficient and easy to use.
            
            </Typography>
              </ListItem>
              <ListItem>

            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
              }}
              >
            Flexibility: We offer flexible solutions to meet your unique business needs.
            
            </Typography>
              </ListItem>
              <ListItem>

            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
              }}
              >
            Affordability: We offer competitive pricing to help businesses save money.
            </Typography>
              </ListItem>
            </List>
          </m.div>

          {/* <Stack spacing={3} sx={{ my: 5 }}>
            {SKILLS.map((progress, index) => (
              <Box component={m.div} key={progress.label} variants={varFade().inRight}>
                <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="subtitle2" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    {progress.label}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {fPercent(progress.value)}
                  </Typography>
                </Stack>

                <LinearProgress
                  color={(index === 0 && 'primary') || (index === 1 && 'warning') || 'error'}
                  variant="determinate"
                  value={progress.value}
                />
              </Box>
            ))}
          </Stack>

          <m.div variants={varFade().inRight}>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            >
              Our Work
            </Button>
          </m.div> */}
        </Grid>
      </Grid>
    </Container>
    
  );
}




















// import { m } from 'framer-motion';

// import Fab from '@mui/material/Fab';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import { alpha, useTheme } from '@mui/material/styles';
// import Markdown from 'src/components/markdown';
// import Image from 'src/components/image';
// import Iconify from 'src/components/iconify';
// import { varFade, MotionViewport } from 'src/components/animate';
// import { Card, List, ListItem } from '@mui/material';

// // ----------------------------------------------------------------------

// export default function AboutOurServices() {
//   const theme = useTheme();

//   const data =
//     `
    
//     <h3>Unordered list</h3><br/>
//     <ul>    <li>Implements        <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>    </li>    <li>Implements        <a href="/dashboard/blog">This is an inside link</a>    </li>    <li>Renders actual, "native" React DOM elements</li>    <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>    <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li></ul><br/><br/><hr><br/><br/><h3>Ordered list</h3><br/><ol>    <li>Analysis</li>    <li>Design</li>    <li>Implementation</li></ol><br/><br/><hr><br/><br/>`;



//   return (
//     // <Box
//     //   sx={{
//     //     pb: 10,
//     //     position: 'relative',
//     //     bgcolor: 'background.neutral',
//     //     '&:before': {
//     //       top: 0,
//     //       left: 0,
//     //       width: 1,
//     //       content: "''",
//     //       position: 'absolute',
//     //       height: { xs: 80, md: 120 },
//     //       bgcolor: 'background.default',
//     //     },
//     //   }}
//     // >

//     <Container component={MotionViewport}>





//       <Box
//         sx={{
//           mb: 10,
//           borderRadius: 2,
//           display: 'flex',
//           overflow: 'hidden',
//           position: 'relative',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         {/* {renderImg}

//         {renderLogo} */}
//         <Stack sx={{ maxWidth: 720, mx: 'auto' }}>

//           <h3>Unordered list</h3>
//           <ul>    <li>Implements        <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>    </li>    <li>Implements        <a href="/dashboard/blog">This is an inside link</a>    </li>    <li>Renders actual, "native" React DOM elements</li>    <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>    <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li></ul><h3>Ordered list</h3><ol>    <li>Analysis</li>    <li>Design</li>    <li>Implementation</li></ol><br /><br /><br /><br />
//         </Stack>
//       </Box>
//       {/* <Stack sx={{ maxWidth: 720, mx: 'auto' }}>
        
//         <h3>Unordered list</h3><br />
//         <ul>    <li>Implements        <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>    </li>    <li>Implements        <a href="/dashboard/blog">This is an inside link</a>    </li>    <li>Renders actual, "native" React DOM elements</li>    <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>    <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li></ul><br /><br /><br /><br /><h3>Ordered list</h3><br /><ol>    <li>Analysis</li>    <li>Design</li>    <li>Implementation</li></ol><br /><br /><br /><br />
//       </Stack> */}
//       {/* <m.div variants={varFade().inUp}>
//           <Typography variant="h3" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
//             Our vision offering the best product nulla vehicula tortor scelerisque ultrices
//             malesuada.
//           </Typography>
//         </m.div> */}


//     </Container>


//     // </Box>
//   );
// }
