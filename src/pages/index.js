import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'


import Layout from '../components/layout'

// import { rhythm } from '../utils/typography'
// import css from './../style/index.module.css'
import List from '../components/List'
import Intro from '../components/Intro'

class Home extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     blog: false
  //   }
  // }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    // let blog = this.state.blog

    return (
      <div>

        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        
        <Intro />

        <Layout>

          {List(posts, 'work', 'Work', 3)}
          <hr />
          {List(posts, null, 'Blog', 3)}

        </Layout>

      </div>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            type
          }
        }
      }
    }
  }
`
