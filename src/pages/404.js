import React from 'react';
import { Link } from 'gatsby';
import Head from '../component/head';

import Layout from '../component/layout';

const NotFound = () => (
  <Layout>
    <Head title="404" />
    <h1>Page not found</h1>
    <p><Link to="/">Head Home</Link></p>
  </Layout>
);

export default NotFound;
