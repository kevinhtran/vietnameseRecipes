import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query MyQuery {
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
const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      {/* <h2>Name: {data.site.info.person.name}</h2> */}
      <h2>site title is : {title}</h2>
    </div>
  );
};

export default FetchData;
