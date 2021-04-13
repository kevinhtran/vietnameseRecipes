import React from 'react';
import Layout from '../components/Layout';
import { page, text } from '../examples/about.module.css';

const About = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>about page</h1>
        <h1>hello world</h1>
        <p className={text}>orem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
      </div>
    </Layout>
  );
};

export default About;
