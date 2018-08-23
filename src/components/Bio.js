import React from 'react'
import {Link} from 'gatsby'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          // marginBottom: rhythm(2.5),
          // alignItems: 'flex-end'
        }}
      >
      <div>

        <img
          src={profilePic}
          alt={`Lisa Ye`}
          style={{
            filter: 'grayscale(1)',
            marginRight: rhythm(1),
            marginBottom: 0,
            width: rhythm(3),
          }}
          />
          </div>
        <div>

        <p style={{fontSize:rhythm(1.1), marginLeft: '-.3rem'}}>
          <Link to="/">Story</Link>
        </p>
        <p>
        <a href="mailto:lisa.ye@libero.it">
            Email
          </a>
          <span style={{ padding: 3 }}></span>
          <a href="https://twitter.com/kylemathews">
            LinkedIn
          </a>
          <span style={{ padding: 3 }}></span>
          <a href="https://twitter.com/kylemathews">
            Facebook
          </a>
          <span style={{ padding: 3 }}></span>
          <a href="https://twitter.com/kylemathews">
            Twitter
          </a>
        </p>
        </div>
      </div>
    )
  }
}

export default Bio
