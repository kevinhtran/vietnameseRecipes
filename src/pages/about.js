import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Squid beard meditation, tote bag microdosing</h2>
            <p>
              Pickled sed helvetica, yr photo booth 8-bit unicorn quinoa. Squid beard meditation,
              tote bag microdosing mixtape copper mug mlkshk chia dreamcatcher organic.
            </p>
            <p>
              Pickled sed helvetica, yr photo booth 8-bit unicorn quinoa. Squid beard meditation,
              tote bag microdosing mixtape copper mug mlkshk chia dreamcatcher organic.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
};

const query = graphql`
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
      totalCount
    }
  }
`;

export default About;
