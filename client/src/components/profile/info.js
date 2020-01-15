import React from 'react';

import ProfileImage from './profile_image';
import Name from './name';
import Email from './email';
import Link from './link';

const Info = props => {
  const { firstName, lastName, email, links } = props.user;
  return (
    <section className="left" >
      <div style={info} >
        <ProfileImage />
        <Name name={ firstName + " " + lastName } />
        <Email email={ email } />
        <Link links={ links } style={ item } />
      </div>
    </section>
    
  )
}

const info = {
  backgroundColor: 'white',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)',
  height: 'auto',
  width: '240px',
  padding: '20px',
  borderRadius: '5px',
  position: 'fixed'
}

const item = {
  border: '1px solid lightgrey',
  borderRadius: '5px',
  marginTop: '5px',
  height: '30px',
  fontSize: '1rem',
  textAlign: 'center',
  width: '100%',
  backgroundColor: 'lightgrey'
}

export default Info;