import React from 'react';
import { graphql } from 'gatsby';

const Testing = ({ data }) => {
  const author = data.site.info.author; // good way for destructing
  return (
    <div>
      <h2>author: {author}</h2>
    </div>
  );
};

export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        simpleData
        complexData {
          name
          age
        }
        person {
          name
          age
        }
      }
    }
  }
`;
export default Testing;
