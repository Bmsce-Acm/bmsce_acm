import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="left-side">
                    <div className="address details">
                        <a href="https://goo.gl/maps/a1KmXR61srfsWq5i9" target="_blank">
                            <i className="fas fa-map-marker-alt"></i>
                        </a>
                        <div className="topic">Address</div>
                        <div className="text-one">B.M.S College of Engineering</div>
                        <div className="text-two">Basavanagudi, Bangalore</div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Phone</div>
                        <div className="text-one">Advaith V</div>
                        <div className="text-one">7204459385</div>
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Email</div>
                        <a href="mailto:acm@bmsce.ac.in">
                            <div className="text-one">acm@bmsce.ac.in</div>
                        </a>
                    </div>
                </div>
                <div className="right-side">
                    <div className="topic-text">Reach Us out!</div>
                    <form action="#">
                        <div className="input-box">
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="input-box" id="msgBx">
                            <input type="text" placeholder="Message" />
                        </div>
                        <div className="input-box message-box"></div>
                        <div className="button">
                            <input type="button" value="Send Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact