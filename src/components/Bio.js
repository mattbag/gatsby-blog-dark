import React from 'react'

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
          marginBottom: rhythm(2.5),
          alignItems: 'flex-end'
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            filter: 'grayscale(1)',
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
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
    )
  }
}

export default Bio
