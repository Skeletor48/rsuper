import React from "react";
import "./styles/Footer.css";

function Footer() {
    return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        SKLTR48  &nbsp;
                        <i className='fas fa-skull' />
                    </div>
                    <small className='website-rights'>Skeletor48 © 2022</small>
                    <div className='social-icons'>
                        <a
                            className='social-icon-link facebook'
                            href='https://m.me/mihaly.banfi.5'
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Facebook'>
                            <i className='fab fa-facebook-messenger' />
                        </a>
                        <a
                            className='social-icon-link instagram'
                            href='https://www.instagram.com/cuarenta_y_ocho/'
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Instagram'>
                            <i className='fab fa-instagram' />
                        </a>
                        <a
                            className='social-icon-link youtube'
                            href='https://gitlab.com/Skeletor48'
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Youtube'>
                            <i className='fab fa-gitlab' />
                        </a>
                        <a
                            className='social-icon-link twitter'
                            href='https://github.com/Skeletor48'
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Twitter'>
                            <i className='fab fab fa-github' />
                        </a>
                        <a
                            className='social-icon-link linkedin'
                            href='https://www.linkedin.com/in/mihaly-banfi-22962986/'
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='LinkedIn'>
                            <i className='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
