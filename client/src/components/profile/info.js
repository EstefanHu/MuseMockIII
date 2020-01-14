import React from 'react';

import ProfileImage from './profile_image';
import Name from './name';
import Link from './link';

const Info = props => {
  return (
    <section className="left" style={primary} >
      <ProfileImage />
      <Name />
      <Link />
    </section>
  )
}

export default Info;