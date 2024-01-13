import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { usePathname } from 'src/routes/hooks';

// import Footer from './footer';
import Header from './header';
// import HeaderSimpleTwo from '../common/header-simple-Two';
import Footer from './footer';

// ----------------------------------------------------------------------

export default function MainLayoutTwo({ children }) {
  const pathname = usePathname();

  const homePage = pathname === '/';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />
      {/* <HeaderSimpleTwo /> */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!homePage && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        {children}
      </Box>

      {/* <Footer /> */}
      <Footer />
    </Box>
  );
}

MainLayoutTwo.propTypes = {
  children: PropTypes.node,
};
