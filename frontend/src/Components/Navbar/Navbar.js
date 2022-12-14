import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const { pathname } = location;
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const splitLocation = pathname.split("/");

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src="/images/acm_nobg.png" width="150px" height="150px" />
                    </a>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a
                                href='/'
                                className={splitLocation[1] === "" ? "nav-links active" : "nav-links"}
                                onClick={closeMobileMenu}
                            >
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                href='/team'
                                className={splitLocation[1] === "team" ? "nav-links active" : "nav-links"}
                                onClick={closeMobileMenu}
                            >
                                About Us
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                href='/events'
                                className={splitLocation[1] === "events" ? "nav-links active" : "nav-links"}
                                onClick={closeMobileMenu}
                            >
                                Events
                            </a>
                        </li>
                        <li>
                            <a
                                href='/gallery'
                                className={splitLocation[1] === "gallery" ? "nav-links active" : "nav-links"}
                                onClick={closeMobileMenu}
                            >
                                Gallery
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;