import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'


import Layout from '../components/layout'

import { rhythm } from '../utils/typography'
import css from './../style/index.module.css'

class BlogIndex extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     blog: false
  //   }
  // }

  // _classes(el) {
  //   let classes;
  //   if (this.state.blog) {
  //     classes = [css.open, css[el]]
  //   } else {
  //     classes = [css[el]]
  //   }
  //   return classes.join(' ')
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
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <div className={`${css.border}`} style={{position:'relative', padding:'2rem'}}>
          
          <h2
            className={css.blog__heading}
            style={{
              fontSize: rhythm(1.8),
            }}>
            <Link to="/">
            <span>+</span>
            Blog
            </Link>
            </h2>
          {posts.slice(0, 3).map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <article key={node.fields.slug} style={{padding:'.7rem 0'}}>
                <h3
                  style={{
                    marginLeft: rhythm(1 / 3 * -1 ),
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small style={{color:'#444'}}>{node.frontmatter.date}</small>

                <p style={{fontSize: '.8rem'}} dangerouslySetInnerHTML={{ __html: node.excerpt }} />

              </article>
            )
          })}
         <h5><Link style={{ boxShadow: 'none', marginTop: rhythm(1.1) }} to="/">Read All</Link></h5>
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
