import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
// import PageTransition from 'gatsby-plugin-page-transitions'
import { rhythm, scale } from '../utils/typography'
import Bio from '../components/Bio'
// import Intro from '../components/Intro'
import Header from './Header'
import '../style/master.css'
import css from '../style/index.module.css'
const fonts = [
  '/static/playfair-display-latin-400-203179d16cd511feb9d8691f27926c3b.woff2',
  '/static/playfair-display-latin-700-c8c6ab6af463c561473681a3b4621af3.woff2',
  '/static/playfair-display-latin-700italic-c8ebe87087ddd3f2b639e80a1cf604f0.woff2',
  '/static/playfair-display-latin-900-4679353199d23f37e5aceb461a374027.woff2',
]
class Layout extends React.Component {
  render() {
    const { location, children, template } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // console.log(location)
    return (
      // <PageTransition>
      <div className={css.pageFade} data-template={template}>
        <Helmet>
          {fonts.map((f,i)=>
            <link
            key={'font_' + i}
              rel="preload"
              href={f}
              as="font"
              crossOrigin="anonymous"
            />
          )}
        </Helmet>
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

          <div style={{ padding: '4rem 0' }}>
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
