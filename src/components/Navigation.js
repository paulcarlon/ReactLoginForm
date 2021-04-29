import React from 'react';

const Navigation = () => {
  return (
    <div>
      <ul style={ListStyle}>
        <li style={ItemStyling}>
          <a href='#'>Portfolio</a>
        </li>
        <li style={ItemStyling}>
          <a href='#'>Store</a>
        </li>
        <li style={ItemStyling}>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

let ItemStyling = { marginRight: '1em' };

let ListStyle = {
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
};

export default Navigation;
