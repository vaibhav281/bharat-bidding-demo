'use client';

import PropTypes from 'prop-types';
// import CompactLayoutTwo from 'src/layouts/compact/indexTwo';

// import MainLayout from 'src/layouts/main';
import MainLayoutTwo from 'src/layouts/main/indexTwo';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  // return <CompactLayoutTwo>{children}</CompactLayoutTwo>;
  return <MainLayoutTwo>{children}</MainLayoutTwo>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
