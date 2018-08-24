import React from 'react';
import { Link } from 'gatsby'

const linkStyle = {
    boxShadow: 'none',
    textDecoration: 'none',
    color: 'inherit',
    padding:'.2rem .4rem'
}
const Header = ({ normal, size }) =>
    <div style={{
        position: normal ? '' : 'fixed',
        right: '4vmax',
        bottom: '4vmax',
    }}>
        <h2
            style={{
                fontSize: (size || 4) + 'vmax',
                marginBottom: 0,
                marginTop: 0,
                letterSpacing: 4
            }}
        >
            <Link to={'/'} style={linkStyle}>Lisa Ye</Link>
        </h2>
        <p>
        <Link
            style={linkStyle}
            to={'/story'}
        > -Story
        </Link>
            <Link
            style={linkStyle}
            to={'/work'}
        > -Work
        </Link>
        <Link
            style={linkStyle}
            to={'/blog'}
        >- Blog
        </Link>
        </p>
    </div>


export default Header;