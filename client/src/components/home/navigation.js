import React from 'react';

const Navigation = props => {
  return (
    <section className="left">
      <div style={ scroll } >
        <span style={ navItem }><h3 style={ navHead } >Sectors</h3></span>
        {props.sectors.map(sector => (
          <button style={ navItem }>{ sector }</button>
        ))}
      </div>
    </section>
  );
}

const scroll = {
  position: 'fixed',
  width: '240px',
  height: '100%',
  overflow: 'scroll'
}

const navHead = {
  textDecoration: 'underline'
}

const navItem = {
  display: 'block',
  textAlign: 'center',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '5px',
  marginBottom: '10px',
  fontSize: '1.2rem',
  padding: '10px 5px',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)',
  width: '100%',
}

export default Navigation;