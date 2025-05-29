
import React from 'react';

const Logo = ({ className = "text-2xl font-bold" }: { className?: string }) => {
  return (
    <div className={`${className} text-amber-900`}>
      <span className="font-light">ALLI</span>
      <span className="font-black">RAA</span>
    </div>
  );
};

export default Logo;
