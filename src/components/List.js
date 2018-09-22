import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { rhythm } from '../utils/typography'
import css from './../style/index.module.css'

const List = (posts, filter, title, limit) =>
    <div className={`${css.border}`} style={{ position: 'relative', padding: '2rem' }}>
        <h2
            className={css.blog__heading}
            style={{
                fontSize: rhythm(1.8),
            }}>
            <Link to={`/${filter ? 'work': 'blog'}`} style={{ textDecoration: 'none' }}>
                <span>+</span>
                {title}
            </Link>
        </h2>
        {posts.filter(p => {
            const work = p.node.frontmatter.work
            // console.log(type)
            return work == filter 
        })
            .slice(0, limit || posts.length)
            .map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                    <article key={node.fields.slug} style={{ padding: '.7rem 0' }}>
                        <h3
                            style={{
                                marginLeft: rhythm(1 / 3 * -1),
                                marginBottom: rhythm(1 / 4),
                            }}
                        >
                            <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                                {title}
                            </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small>

                        <p style={{ fontSize: '.8rem' }} dangerouslySetInnerHTML={{ __html: node.excerpt }} />

                    </article>
                )
            })}
            { limit > 0 && limit != null &&
                <h5  style={{ margin: rhythm(0.5) }}><Link to={`/${filter ? 'work': 'blog'}`}>+ All</Link></h5>
            }
    </div>


export default List;