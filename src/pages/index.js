import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h1 style={{ color: 'red', textTranform: 'capitalize' }}>homepage</h1>
      <h1>hello people</h1>
      <h1>hello world</h1>
    </Layout>
  );
};

export default Home;
