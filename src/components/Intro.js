import React from 'react';
// import { Link } from 'gatsby'

import css from './../style/index.module.css'
import Bio from '../components/Bio'
import Header from '../components/Header'

const poster = `https://images.unsplash.com/photo-1506682346094-f6b22bf130eb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8766e60119d3bc8c1dc02916936844e6&auto=format&fit=crop&w=1566&q=80`
// const curve = '../assets/svg/curve.svg'
const curve1 = `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="405 478 422 204" width="422" height="204"><path d=" M 405 682 L 827 682 L 827 478 Q 816 558 799 624 Q 775.022 717.092 504 610 Q 550 651 405 682 Z " fill="rgb(17,17,17)"/></svg>`
const curve2 = `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="301 753 597 173" width="597" height="173"><path d=" M 804 873 C 662.082 927.966 444.626 916.457 301 926 L 898 926 L 898 753 Q 888.544 840.255 804 873 Z " fill="rgb(17,17,17)"/></svg>`
const curve3 = `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="405 459.211 422 222.789" width="422" height="222.789"><path d=" M 405 682 L 827 682 L 827 478 Q 644 423 645 529 Q 646 635 545 583 Q 550 651 405 682 Z " fill="rgb(17,17,17)"/></svg>`
const curve4 = `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="402 424.351 421 100.649" width="421" height="100.649"><path d=" M 690 453 C 609.233 502.962 528 399 402 525 L 823 525 L 823 447 Q 777.494 398.878 690 453 Z " fill="rgb(17,17,17)"/></svg>`
const curve5 = `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="-110 107 1337 257" width="1337" height="257"><defs><clipPath id="_clipPath_TV3oRD9s2ZzMqnO18tv8baoCDNQDXgj9"><rect x="-110" y="107" width="1337" height="257"/></clipPath></defs><g clip-path="url(#_clipPath_TV3oRD9s2ZzMqnO18tv8baoCDNQDXgj9)"><g style="isolation:isolate"><path d=" M 273.554 264 C 530.053 313.962 1050.184 -40 1227 364 L -110 364 L -110 107 Q -4.306 209.878 273.554 264 Z " fill="rgb(17,17,17)"/></g></g></svg>`
const curves = [curve1, curve2, curve3, curve4, curve5]

const Intro = () =>
    <div>
        <div style={{ position: 'relative' }}>

            <img src={poster} alt="lisa ye poster" className={css.poster} />

            <div dangerouslySetInnerHTML={{ __html: curves[(Math.floor(Math.random() * curves.length))] }} className={css.curver} />
        </div>

        <div style={{
            position: 'relative',
            padding: '0 2rem 2rem',
            margin: 'auto',
            maxWidth: '50rem'
        }} >
        
            <div>
                <Header normal={true} size={8} />
            </div>

            <br />
            <h3><i>Who am I?</i></h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error.</p>

            <hr />
            <div style={{ padding: '4vmax 0' }}>
                <Bio />
            </div>

        </div>
    </div>

export default Intro;