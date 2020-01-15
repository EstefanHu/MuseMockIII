import React from 'react';

const Navigation = props => {
  return (
    <section className="left">
      <span style={ navItem }><h3 style={ navHead } >Sectors</h3></span>
      {props.sectors.map(sector => (
        <span style={ navItem }>{sector}</span>
      ))}
    </section>
  );
}

const navItem = {
  display: 'block',
  textAlign: 'center',
  backgroundColor: 'white',
  borderRadius: '5px',
  marginBottom: '10px',
  fontSize: '1.2rem',
  padding: '10px 5px',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)'
}

const navHead = {
  textDecoration: 'underline'
}

export default Navigation;