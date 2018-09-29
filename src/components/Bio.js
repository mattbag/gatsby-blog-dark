import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const Bio = ({ normal, size }) => (
  <StaticQuery
    query={graphql`
      query {
        hp:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/home.md/"}}) {
          edges {
            node {
              id
              frontmatter {
                social_link {
                name
                url
                }
              }
            }
          }
        }
      }
    `}
    render={({hp}) => (
      <div
        style={{
          display: 'flex',
          // marginBottom: rhythm(2.5),
          alignItems: 'center',
        }}
      >
        <div>
          <img
            src={profilePic}
            alt={`Lisa Ye`}
            style={{
              filter: 'grayscale(1)',
              paddingRight: '1vmax',
              marginBottom: 0,
              width: rhythm(3),
            }}
          />
        </div>
        <div>
          <p>
            {hp.edges[0].node.frontmatter.social_link.map(url => (
              <span style={{ padding: 3 }} key={url.name}>
                <a href={url.url} target="_blank">
                  {url.name}
                </a>
                {/* <span style={{ padding: 3 }} /> */}
              </span>
            ))}
          </p>
        </div>
      </div>
    )}
  />
)
export default Bio
