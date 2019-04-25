import React from 'react';
import { Link } from 'gatsby';
import Layout from '../component/layout';
import Head from '../component/head';

const About = () => (
  <Layout>
    <Head title="About" />
    <h1>About Page</h1>
    <h2>This is where the about page info will be located</h2>
    <p>
Wnt to interact with me on Twitter? head over to my contact page for more info.
      {' '}
      <Link to="/contact">Contact page</Link>
    </p>
  </Layout>
);

export default About;
