import React from 'react'
import Blogposts from './Blogposts'
import Nav from './Nav'

const Blog = ({className}) => {
    return (
        <div className={className}>
            {/* <Header /> */}
            <Nav/>
            <Blogposts/>
        </div>
    )
}

export default Blog
