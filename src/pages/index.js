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
    } else {
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

        <img src={img} alt="" className={this._classes('poster')} />

        <div style={{ height: '90vh', display: 'flex', alignItems: 'center' }}>

          <div style={{ position: 'relative', padding: '0 2rem 2rem' }} className={`${css.bg} ${css.border}`}>
            <div style={{position:'absolute', top: '-18%' }} className={css.bio__heading}>
              <Header normal={true} />
            </div>
            <br/>
            <h3>Who am I?</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.</p>
            <p style={{ textAlign: 'right', fontFamily: 'Playfair Display,serif' }}><i>very cool</i></p>
            <hr style={{ width: '20%', backgroundColor: 'white', margin: '1rem 80%' }} />
            <Bio />
          </div>
          
        </div>

        <div className={`${css.bg} ${css.border}`} style={{position:'relative', padding:'1rem'}}>
          
          <h2
            style={{
              position:'absolute',
              fontSize: rhythm(1.8),
              left: '-30%',
              cursor: 'pointer',
              top: '1rem'
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

                    // marginLeft: rhythm(1 / 2 * -1 ),
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small style={{color:'#666'}}>{node.frontmatter.date}</small>
                <div style={{padding: 5}}>
                <p style={{fontSize: '.8rem'}} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
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
