import React from 'react';

const Footer = () => {
    return (
        <div className='footer-container'>
            <a href='/' className='social-logo'>
                BMSCE ACM Student Chapter
            </a>
            <div className='inner_footer'>
                <div className='map_container'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4814935873596!2d77.56333711464487!3d12.941012190875952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1664289586405!5m2!1sen!2sin" width="300" height="300" loading="lazy">
                    </iframe>
                </div>
                <div className='quick_links'>
                    <h2>Quick Links</h2>
                    <a href='/'>Home</a>
                    <a href='/events'>Events</a>
                    <a href='/team'>Teams</a>
                    <a href='/'>Contact</a>
                </div>
                <div class='social_media'>
                    <div className='acm_logo'>
                        <img src="/images/acm_nobg.png" width="250px" height="200px" alt='Logo' />
                    </div>
                    <div class='social-media-wrap'>
                        <div class='social-icons'>
                            <a
                                class='social-icon-link facebook'
                                href='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i class="fa-solid fa-phone"></i>
                            </a>
                            <a
                                class='social-icon-link instagram'
                                href='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i class='fab fa-instagram' />
                            </a>
                            <a
                                class='social-icon-link twitter'
                                href='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <i class="fa-solid fa-envelope"></i>
                            </a>
                            <a
                                class='social-icon-link linkedin'
                                href='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <small className="last">BMSCE ACM © 2022</small>
        </div>
    )
}

export default Footer