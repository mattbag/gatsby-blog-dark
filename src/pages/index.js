import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
const img = 'https://images.unsplash.com/photo-1534859108275-a3a6f52f0d46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=803ae0bb5c9d85e9874525296351bae2&auto=format&fit=crop&w=1600&q=80'
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
        <img src={img} alt=""
          style={{
            position: 'absolute',
            left: '2vmin',
            bottom: '2vmin',
            maxHeight: '90vh',
            maxWidth: '60vh',
            'margin-bottom': 0,
            opacity: blog ? 0.2 : 1
          }} />

        <div style={{
          position: 'relative',
          transition: 'transform 900ms ease',
          willChange: 'transform',
          transformOrigin:'top left',
          transform: blog ? '' : 'translateX(130%) scale(.7)',
        }}>
          <h2 onClick={() => this.setState({ blog: !this.state.blog })}
          style={{
            fontSize: rhythm(1.8),
            position: 'absolute',
            left: '-30%',
            cursor: 'pointer',
            top: '1rem'
          }}>
            <span 
              style={{
                display: 'inline-block',
                transition: 'transform 1000ms ease',
                transform: blog ? 'rotate(405deg)' : ''
              }}>+</span>
            Blog</h2>
          {posts.slice(0,3).map(({ node }) => {
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
          {
            blog &&
            <h4>
            <Link style={{ boxShadow: 'none', marginTop: rhythm(1.1) }} to="/">Read All</Link>
          </h4>
          }
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
