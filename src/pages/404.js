import React from 'react'

import Layout from '../components/layout'

const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <div style={{ padding: '26vmin' }}>
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
