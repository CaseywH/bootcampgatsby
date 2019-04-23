import React from 'react';
import { Link } from 'gatsby';


import Layout from '../component/layout';

const IndexPage = () => (
  <Layout>
    <h1>Hello</h1>
    <h2>I'm Casey an aspiring developer in beautiful California</h2>
    <p>
    Need a developer?
      {' '}
      <Link to="/contact">Contact Me</Link>
    </p>

  </Layout>

);

export default IndexPage;
