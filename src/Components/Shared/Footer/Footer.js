import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <div className='footer-container'>
                    <h2 className='title-logo'>Study</h2>
                    <h3 className='title-logo'>Hacks Coner</h3>
                    <p>Download Our Mobile App</p>
                    <div className='d-flex'>
                        <a href="https://www.linkedin.com/in/manikislammahi/">
                            <h5>Download App</h5>
                        </a>
                    </div>
                </div>

                <div className='company-others'>
                    <div>
                        <h5 className='footer-text pb-2'>Company</h5>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Career</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Privacy Policy</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Refund Policy</a></p>

                    </div>

                    <div className='footer-others'>
                        <h5 className='footer-text pb-2'>Others</h5>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Blogs</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Crash Course</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Want to be an affiliate</a></p>
                    </div>
                </div>

                <div className='social-media'>
                    <h5 className='footer-text pb-2'>Through social media we</h5>
                    <p className='footer-text'>Contact: <span className='footer-span'>8244</span> (8AM - 11PM)</p>
                    <p className='footer-text'>SMS: SHCHelp to 440404 (24X7)</p>
                    <p className='footer-text'>Email: <span className='footer-span'>support@studyhackscorner.com</span></p>

                    <div className='social-icon-container'>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><span>Facebook</span></a>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><span>Linkedin</span></a>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><span>Twiter</span></a>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><span>Youtube</span></a>
                    </div>

                </div>

            </div>

            <div className='text-center py-4'>Copyright &copy; 2022 to-do-app.com</div>

        </footer>
    );
};

export default Footer;