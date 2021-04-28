import React from 'react';
import Layout from '../components/Layout';

const Tags = () => {
  return (
    <Layout>
      <h1>Tags page</h1>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
