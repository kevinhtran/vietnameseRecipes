import React from 'react';
import { graphql } from 'gatsby';

const RecipeTemplate = (props) => {
  console.log(props);
  return (
    <div>
      <h4>Recipe Template</h4>
    </div>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTemplate;
