import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Ut iPhone do artisan plaid. Distillery whatever godard, enamel pin before they sold
              out palo santo echo park fingerstache. Irure portland DIY, bushwick migas activated
              charcoal try-hard non synth incididunt tempor.
            </p>
            <p>
              Dreamcatcher cloud bread plaid lyft seitan whatever. Ennui listicle eiusmod
              reprehenderit hammock, typewriter tote bag elit kickstarter coloring book tofu ea.
            </p>
            <p>
              Pickled sed helvetica, yr photo booth 8-bit unicorn quinoa. Squid beard meditation,
              tote bag microdosing mixtape copper mug mlkshk chia dreamcatcher organic. Cillum
              kitsch vaporware +1 typewriter cold-pressed readymade asymmetrical stumptown.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mknkobwb"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }, filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Contact;
