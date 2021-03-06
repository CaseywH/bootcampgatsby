import React from 'react';
import Layout from '../component/layout';
import Head from '../component/head';

const Contact = () => (
  <Layout>
    <Head title="Contact" />
    <h1>Contact Page</h1>
    <h2>Find all contact info on this page.</h2>
    <p>
Send me a tweet
      {' '}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">@cheinemeyer</a>
    </p>
  </Layout>
);

export default Contact;
