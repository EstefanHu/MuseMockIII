import React from 'react';

import ProfileImage from './profile_image';
import Name from './name';
import Link from './link';

const Info = props => {
  const { firstName, lastName, links } = props.user;
  return (
    <section className="left" style={info} >
      <ProfileImage />
      <Name name={ firstName + " " + lastName } />
      <Link links={ links } />
    </section>
  )
}

const info = {
  backgroundColor: 'white',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)'
}

export default Info;