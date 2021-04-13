import React from 'react';
import { Link } from 'gatsby';

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
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
