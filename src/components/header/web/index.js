import React from 'react'
import './web.css'
import {Link} from 'react-router-dom'

function Web() {
    return (
        <div className="web menu3">
            <div className="web-option">
                <a href="#projects">
                    Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                    Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                    Work
                </a>
            </div>
            <div className="web-option">
                <Link to="/blog" target="_blank" rel="noreferrer" exact>
                    Blog
                </Link>
            </div>
            <div className="web-option">
                <a href="#contact">
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Web
