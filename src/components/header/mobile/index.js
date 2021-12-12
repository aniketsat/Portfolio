import React from 'react'
import './mobile.css'
import {Link} from 'react-router-dom'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
            <i class="far fa-times-circle"></i>
            </div>
            <div className="mobile-options menu3">
                <div className="mobile-option">
                    <a href="#projects">
                        Projects
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills">
                        Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                        Work
                    </a>
                </div>
                <div className="mobile-option">
                    <Link to="/blog" target="_blank" rel="noreferrer" exact>
                        Blog
                    </Link>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile
