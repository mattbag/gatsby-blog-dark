import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import Header from '../components/Header'
import { rhythm } from '../utils/typography'
import css from './../style/index.module.css'

const img = 'https://images.unsplash.com/photo-1534859108275-a3a6f52f0d46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=803ae0bb5c9d85e9874525296351bae2&auto=format&fit=crop&w=1600&q=80'
class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      blog: false
    }
  }

  // _blog() {
  //   if (this.state.blog) return [css.open, css.blog]
  //   return [css.blog]
  // }
  // _poster() {
  //   if (this.state.blog) return [css.open, css.poster]
  //   return [css.poster]
  // }
  _classes(el) {
    let classes;
    if (this.state.blog) {
      classes = [css.open, css[el]]
    }else{
      classes = [css[el]]
    }
    return classes.join(' ')
  }

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
        <img src={img} alt="" className={this._classes('poster')} />
        <div
          className={this._classes('blog')}>
          <h2 onClick={() => this.setState({ blog: !this.state.blog })}
          className={css.blog__heading}
            style={{
              fontSize: rhythm(1.8),
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
          {posts.slice(0, 3).map(({ node }) => {
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
          {blog && <h4><Link style={{ boxShadow: 'none', marginTop: rhythm(1.1), marginBottom: rhythm(1.3) }} to="/">Read All</Link></h4>}
        </div>

        <div style={{ position: 'relative', backgroundColor: '#000', padding: '4vmin' }}>
          <div style={{ right: '-4%', top: '-20%' }} className={css.bio__heading}>
            <Header normal={true} />
          </div>
          <h3>Who am I?</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.</p>
          <p style={{ textAlign: 'right', fontFamily: 'Playfair Display,serif' }}><i>very cool</i></p>
          <hr style={{ width: '20%', backgroundColor: 'white', margin: '1rem 80%' }} />
          <Bio />
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
