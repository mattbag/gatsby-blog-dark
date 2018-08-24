import React from 'react'
import Helmet from 'react-helmet'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = (props) => (
  <Layout location={props.location}>
  <Helmet
          title={'404'}
        />
    <div style={{ padding: '6vw' }}>
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <h4><Link to="/">- Home</Link></h4>
    </div>
  </Layout>
)

export default NotFoundPage
