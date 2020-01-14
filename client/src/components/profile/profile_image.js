import React from 'react';

import Background from '../../imgs/default.jpg';

const ProfileImage = props => {
  return (
    <div style={img} >
      {/* <img src={require("../../imgs/default.jpg")} alt="profile image" /> */}
    </div>
  )
}

const img = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

export default ProfileImage;