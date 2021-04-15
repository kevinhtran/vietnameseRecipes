import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Images from '../examples/Images';

const Home = () => {
  return (
    <Layout>
      <h1>home page</h1>
      <Images />
    </Layout>
  );
};

export default Home;
