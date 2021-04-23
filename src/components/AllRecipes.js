import React from 'react';
import RecipesList from './RecipesList';
import TagsList from './TagsList';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  // destructuring way
  const {
    allContentfulRecipes: { nodes: recipes },
  } = useStaticQuery(query);

  // this is the same as the destructuring way
  // const data = useStaticQuery(query);
  // const recipes = data.allContentfulRecipe.nodes;
  return (
    <div>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default AllRecipes;
