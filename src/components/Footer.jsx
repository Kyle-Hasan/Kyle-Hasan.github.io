import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto text-center">
        <p>© {currentYear} Kyle Hasan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
