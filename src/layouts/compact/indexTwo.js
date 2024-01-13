import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

// import Header from '../common/header-simple';
import Footer from '../main/footer';
// import HeaderSimpleTwo from '../common/header-simple-Two';
import Header from '../main/header';

// ----------------------------------------------------------------------

export default function CompactLayoutTwo({ children }) {
  return (
    <>
      <Header />

      <Container component="main">
        <Stack
          sx={{
            py: 12,
            m: 'auto',
            maxWidth: 400,
            minHeight: '100vh',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

CompactLayoutTwo.propTypes = {
  children: PropTypes.node,
};
