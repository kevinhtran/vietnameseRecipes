import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { page, text } from '../examples/home.module.css';
import { ExampleButton } from '../examples/button';

const Home = () => {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>click me</ExampleButton>
        <h1>homepage</h1>
        <h1>hello people</h1>
        <h1>hello world</h1>
        <p className={text}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
      </div>
    </Layout>
  );
};

export default Home;
