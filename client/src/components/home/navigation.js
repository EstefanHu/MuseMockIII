import React from 'react';

export function Navigation(props) {
  return (
    <section id="navigation" className="left">
      {this.props.sectors.map(sector => (
        <span>sector.name</span>
      ))}
    </section>
  );
}