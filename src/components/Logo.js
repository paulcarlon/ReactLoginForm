import React from 'react';

const Logo = () => {
  return (
    <div>
      <img
        style={{
          marginTop: '1em',
          width: '25%',
          filter: 'invert(1)',
        }}
        src='http://aubrey.digital/sbp/watermark.png'
        alt='Shannon Beelman Photography Las Vegas'
      />
    </div>
  );
};

export default Logo;
