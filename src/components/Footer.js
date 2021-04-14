import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Vietnamese Food Any Day</span> by{' '}
        <a href="https://www.instagram.com/andreanguyen88/?hl=en">Andrea Nguyen</a>
      </p>
    </footer>
  );
};

export default Footer;
