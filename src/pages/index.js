import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Hello World!</h1>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
      <a href="/about">Regular Link</a>
      <a href="https://www.gatsbyjs.com/">gatsbyjs</a>
    </div>
  );
};

export default Home;
