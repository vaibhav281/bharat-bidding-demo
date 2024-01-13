'use client';

import PropTypes from 'prop-types';

// import CompactLayout from 'src/layouts/compact';
import CompactLayoutTwo from 'src/layouts/compact/indexTwo';

// import MainLayoutTwo from 'src/layouts/main/indexTwo';/

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  // return <MainLayoutTwo>{children}</MainLayoutTwo>;
  return <CompactLayoutTwo>{children}</CompactLayoutTwo>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
