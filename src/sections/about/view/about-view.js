'use client';

import AboutHero from '../about-hero';
import AboutWhat from '../about-what';
// import AboutTeam from '../about-team';
import AboutVision from '../about-vision';
import AboutOurServices from '../about-our-services';
import AboutTestimonials from '../about-testimonials';

// ----------------------------------------------------------------------

export default function AboutView() {
  return (
    <>
      <AboutHero />

      <AboutWhat />
      <AboutOurServices />

      <AboutVision />

      {/* <AboutTeam /> */}

      <AboutTestimonials />
    </>
  );
}
