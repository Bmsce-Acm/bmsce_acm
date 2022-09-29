import React from 'react';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <div className='hero-img'>
                <img src="/images/acm_nobg.png" />
            </div>
            <div className='hero-cnt'>
                <h1>B.M.S College of Engineering</h1>
                <h2>Associate for Computing Machinery</h2>
                <h3>Student Chapter</h3>
            </div>
        </div>
    );
};

export default HeroSection;