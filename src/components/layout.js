import React from 'react'
// import { Link } from 'gatsby'
import Bio from '../components/Bio'
import Intro from '../components/Intro'

import { rhythm, scale } from '../utils/typography'
import Header from './Header'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>

        {location.pathname !== rootPath && <Header />}
        {location.pathname == rootPath && <Intro />}
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}>
          {children}

          <div style={{ padding: '2rem 2vmax' }}>
            <Bio />
            <hr style={{ width: '20%', backgroundColor: '#fff', margin: '1rem 0' }} />
          </div>

        </div>
      </div>
    )
  }
}

export default Template
