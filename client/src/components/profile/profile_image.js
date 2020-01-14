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
  backgroundSize: 'cover',
  boxShadow: '5px 5px 5px 0 rgba(0, 0, 0, 0.05)',
  border: '3px solid lightgrey',
}

export default ProfileImage;