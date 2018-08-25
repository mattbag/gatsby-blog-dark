import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const StoryPage = ({ data, location }) => {
  const { markdownRemark: page } = data
  // console.log('l: ', location)

  return (
    <Layout location={location || ''}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: page.frontmatter.description }]}
        title={`${page.frontmatter.title} - ${'Lisa Ye'}`}
      />
      <div style={{ padding: '4vmax 1rem' }}>
        <h1>{page.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>

      <hr />
    </Layout>
  )
}

StoryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default StoryPage

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
