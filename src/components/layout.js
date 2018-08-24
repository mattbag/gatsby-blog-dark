import React from 'react'
// import { Link } from 'gatsby'
// import PageTransition from 'gatsby-plugin-page-transitions'

import Bio from '../components/Bio'
import Intro from '../components/Intro'
import Header from './Header'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      // <PageTransition>
      <>
        <Header normal={location && location.pathname == '/'}/>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}>

          {children}

          <div style={{ padding: '4rem 2vmax' }}>
            <Bio />
            <hr />
          </div>

        </div>
      </>
      // </PageTransition>
    )
  }
}

export default Layout
