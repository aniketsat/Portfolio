import React from 'react'
import './blog.css'
import {Link} from 'react-router-dom'
import {BsTwitter} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {SiHashnode} from 'react-icons/si'

const Nav = () => {
    return (
        <div className='blog-header'>
            <div className="blog-header__options">
                <a href="https://anikets.hashnode.dev/" target='_blank' rel="noreferrer">
                    <span className='blog-header-options__icon'><SiHashnode /></span>
                    <span className='blog-header-options__text'>Hashnode</span>
                </a>
            </div>
            <div className="blog-header__options">
                <a href="https://twitter.com/aniketsat" target='_blank' rel="noreferrer">
                    <span className='blog-header-options__icon'><BsTwitter /></span>
                    <span className='blog-header-options__text'>Twitter</span>
                </a>
            </div>
            <div className="blog-header__options">
                <Link to="/" target='_parent' rel="noreferrer" exact>
                    <span className='blog-header-options__icon'><AiFillHome /></span>
                    <span className='blog-header-options__text'>Home</span>
                </Link>
            </div>
        </div>
    )
}

export default Nav
