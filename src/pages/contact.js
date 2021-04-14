import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <h3>Get in touch with us</h3>
        <article className="contact-info">
          <section className="contact-page">
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
          </section>
        </article>
        <article>
          <form className="form contact-form">
            <div className="form-row">
              <label htmlFor="name">your name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">your email</label>
              <input type="text" email="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">message</label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" className="btn block">
              Submit
            </button>
          </form>
        </article>
      </main>
    </Layout>
  );
};

export default Contact;
