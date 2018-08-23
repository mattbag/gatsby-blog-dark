import React from 'react';
// import { Link } from 'gatsby'

import css from './../style/index.module.css'
import Bio from '../components/Bio'
import Header from '../components/Header'

const img = 'https://images.unsplash.com/photo-1534859108275-a3a6f52f0d46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=803ae0bb5c9d85e9874525296351bae2&auto=format&fit=crop&w=1600&q=80'

const Intro = () =>
    <div style={{
        minHeight: '90vh', display: 'flex', alignItems: 'center', marginBottom: '-1rem',
        flexWrap: 'wrap'
    }}>

        <img src={img} alt="lisa ye poster" style={{
            maxWidth: '50vw', flex:'1 0 350px' }} className={css.poster} />

        <div style={{ 
            position:'relative',
            padding: '0 2rem 2rem', 
            marginLeft: '-1rem',
         flex:'1 1 350px',
         maxWidth:'500px'
     }} className={`${css.bg}`}>
            <div className={css.bio__heading}>
                <Header normal={true} />
            </div>

            <br />
            <h3><i>Who am I?</i></h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.</p>

            <hr style={{ width: '20%', backgroundColor: 'white', margin: '2rem 80%' }} />
            <Bio />
        </div>

    </div>

export default Intro;