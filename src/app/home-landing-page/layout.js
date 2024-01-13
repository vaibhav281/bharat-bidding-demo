'use client';

import PropTypes from 'prop-types';

// import MainLayout from 'src/layouts/main';
import MainLayoutTwo from 'src/layouts/main/indexTwo';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <MainLayoutTwo>{children}</MainLayoutTwo>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
