import React from 'react';
import { Link } from 'gatsby'
const Header = ({normal, size}) => {

    return (<h1
        style={{
            fontSize: (size || 4 )+ 'vmax',
            marginBottom: 0,
            marginTop: 0,
            position: normal ? '': 'fixed',
            right: '2rem',
            bottom: '2rem',
            letterSpacing: 4
        }}
    >
        <Link
            style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
            }}
            to={'/'}
        >
            Lisa Ye
        </Link>
    </h1>)

}

export default Header;