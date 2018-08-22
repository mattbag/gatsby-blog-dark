import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      blog: false
    }
  }

  // openBlog = () => {
  //   if (!this.state.blog) {
  //     this.setState({ blog: true })
  //     console.log('opening...');
  //   }
  // }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    let blog = this.state.blog
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        {/* <Bio /> */}

        <div style={{
          position: 'relative',
          transition: 'transform 900ms ease',
          willChange: 'transform',
          transform: blog ? '' : 'translateX(120%) scale(.8)',
          cursor: blog ? 'auto:':'pointer'
        }}
        >
          <h2 style={{
            fontSize: rhythm(1.8),
            position: 'absolute',
            left: '-30%',
            top: 16
          }}>
          <span onClick={ ()=> this.setState({blog: !this.state.blog})}
          style={{
            display: 'inline-block',
            transition: 'transform 1000ms ease',
            transform: blog ? 'rotate(405deg)' : ''
          }}>+</span> 
          Blog</h2>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </article>
            )
          })}
          <h4>
            <Link style={{ boxShadow: 'none', marginTop: rhythm(1.1) }} to="/">Read All</Link>
          </h4>
        </div>

      </Layout>
    )
  }
}

export default BlogIndex

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
          }
        }
      }
    }
  }
`
