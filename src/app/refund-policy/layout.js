'use client';

import PropTypes from 'prop-types';

import MainLayoutTwo from 'src/layouts/main/indexTwo';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  // return <CompactLayoutTwo>{children}</CompactLayoutTwo>;
  return <MainLayoutTwo>{children}</MainLayoutTwo>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
