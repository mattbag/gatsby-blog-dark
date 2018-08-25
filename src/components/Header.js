import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

const linkStyle = {
  boxShadow: 'none',
  textDecoration: 'none',
  color: 'inherit',
  padding: '.2rem .4rem',
  fontWeght: 'bold',
}
const urls = [
  {
    url: '/story',
    name: 'Story',
  },
  {
    url: '/work',
    name: 'Work',
  },
  {
    url: '/blog',
    name: 'Blog',
  },
]
const Header = ({ normal, size }) => (
  <StaticQuery
    query={graphql`
      query {
        allConfigYaml {
          edges {
            node {
              social_link {
                name
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          position: normal ? 'static' : 'fixed',
          right: '4vmax',
          bottom: '4vmax',
          backgroundColor: '#111',
          zIndex: 9,
        }}
      >
        <h2
          style={{
            fontSize: '8vmax',
            fontStyle: 'normal',
            fontWeight: '900',
            // fontSize: (size || 8) + 'vmax',
            marginBottom: 0,
            marginTop: 0,
            // letterSpacing: 2,
          }}
        >
          <Link to={'/'} style={linkStyle}>
            Lisa Ye
          </Link>
        </h2>
        <p style={{ fontWeight: 700 }}>
          {urls.map(url => (
            <Link style={linkStyle} to={url.url} key={url.name}>
              <i>- {url.name}</i>
            </Link>
          ))}
        </p>
        <p>
          {
            // console.log(data.allConfigYaml.edges[0].node.social_link)
          }
        </p>
      </div>
    )}
  />
)

export default Header
