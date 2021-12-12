import React from 'react'
import './home.css'
import Header from '../header';
import Body from '../body';
import Footer from '../footer';
import { Routes, Route } from 'react-router-dom'
import Blog from '../blog-section';

function Home() {
    return (
        <Routes>
            {/* <div className="home">
                <div>
                    <Header/>
                </div>
                <div>
                    <Body/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div> */}
            <Route exact path='/' element={<div className="home">
                <div>
                    <Header />
                </div>
                <div>
                    <Body />
                </div>
                <div>
                    <Footer />
                </div>
            </div>} />
            <Route exact path='/blog' element={<Blog className='home blog' />} />
        </Routes>
    )
}

export default Home;
