'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


// import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';

// import HomeMinimal from '../home-minimal';
// import HomePricing from '../home-pricing';
// import HomeDarkMode from '../home-dark-mode';
// import HomeLookingFor from '../home-looking-for';
// import HomeForDesigner from '../home-for-designer';
// import HomeColorPresets from '../home-color-presets';
// import HomeAdvertisement from '../home-advertisement';
// import HomeCleanInterfaces from '../home-clean-interfaces';
// import HomeHugePackElements from '../home-hugepack-elements';


import MainLayoutTwo from 'src/layouts/main/indexTwo';
import HomeWhat from '../home-what';
import HomeTeam from '../home-team';
import HomeVision from '../home-vision';
import HomeTestimonials from '../home-testimonials';
import HomeHeroNew from '../home-hero-new';
import HomeHeroModify from '../home-hero-modify';  // Ensure proper spacing here
import HomeMission from '../home-mission';
import HomeVisionNew from '../home-vision-new';

// ----------------------------------------------------------------------

const StyledPolygon = styled('div')(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    // <>
    <MainLayoutTwo>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHeroModify />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeHeroNew />

        <HomeWhat />

        <HomeMission />

        <HomeVisionNew />

        <HomeVision />

        <HomeTeam />
        <HomeTestimonials />
      </Box>

    </MainLayoutTwo>
    // </>
  );
}














// 'use client';

// import HomeHero from '../home-hero';
// import HomeWhat from '../home-what';
// import HomeTeam from '../home-team';
// import HomeVision from '../home-vision';
// import HomeTestimonials from '../home-testimonials';

// // ----------------------------------------------------------------------

// export default function HomeView() {
//   return (
//     <>
//       <HomeHero />

//       <HomeWhat />

//       <HomeVision />

//       <HomeTeam />

//       <HomeTestimonials />
//     </>
//   );
// }
