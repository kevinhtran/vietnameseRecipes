import React from 'react';
import Layout from '../components/Layout';
import { page, text } from '../examples/about.module.css';
import styled from 'styled-components';

const About = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>about page</h1>
        <h1>hello world</h1>
        <p className="text">Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  color: yellowgreen;
  h1 {
    color: purple;
  }
  .text {
    text-transform: uppercase;
  }
`;

export default About;
