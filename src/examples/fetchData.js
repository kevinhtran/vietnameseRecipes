import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query MyQuery {
    site {
      siteMetadata {
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
const FetchData = () => {
  const data = useStaticQuery(getData);
  return (
    <div>
      <h2>Name: {data.site.siteMetadata.person.name}</h2>
    </div>
  );
};

export default FetchData;
