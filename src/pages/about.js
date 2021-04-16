import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

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

export default About;
