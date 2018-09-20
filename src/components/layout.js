import React from 'react'
// import { Link } from 'gatsby'
// import PageTransition from 'gatsby-plugin-page-transitions'
import { rhythm, scale } from '../utils/typography'

import Bio from '../components/Bio'
// import Intro from '../components/Intro'
import Header from './Header'
import '../style/master.css'
import css from '../style/index.module.css'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // console.log(location)
    return (
      // <PageTransition>
      <div className={css.pageFade}>
        <Header normal={false} />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(0)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}

          <div style={{ padding: '4rem 2vmax' }}>
            <Bio />
            <hr />
          </div>
        </div>
      </div>
      // </PageTransition>
    )
  }
}

export default Layout
