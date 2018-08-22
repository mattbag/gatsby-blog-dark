import Typography from 'typography'
// import Wordpress2016 from 'typography-theme-wordpress-2016'
import kirkhamTheme from 'typography-theme-kirkham'
import 'typeface-playfair-display'
const theme = kirkhamTheme
// theme.baseFontSize = '16px'

theme.overrideThemeStyles = () => ({
  'html, body':{
    backgroundColor: '#111',
    minHeight:'100vh',
    color: '#eee',
    // fontFamily: 'sans-serif'
  },
  'body':{
    border: '2vmin solid #fff',
    overflow: 'auto'
  },
  'h1,h2,h3,h4,h5,h6':{
    color: '#fff',
    // fontWeight: '700'
  },
  'blockquote':{
    color: 'inherit'
  },
  'a':{
    color: '#fff',
    fontFamily: 'Playfair Display, serif',
    display:'inline-block',
    transition:'transform 300ms ease-in',
    // fontWeight:'300'
  },
  'a:hover':{
    // color: '#eee',
    transform:'translateY(-2px)'
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

delete theme.googleFonts

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
