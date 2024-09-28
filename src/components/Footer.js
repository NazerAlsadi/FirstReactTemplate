import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return ( 
    <>
      <div className='footer-container'>
        <section className='footer-subscription'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <p className='footer-subscription-heading'>
                You Can Unsubscribe at any Time.
            </p>
            <div className='input-areas'>
                <form>
                    <input className='footer-input' type='email' name='email'
                    placeholder='Your Email'/>
                    <Button buttonStyle='btn--outline'> Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/sign-up'>Testimonials</Link>
              <Link to='/sign-up'>Careers</Link>
              <Link to='/sign-up'>Investors</Link>
              <Link to='/sign-up'>Terms of Services</Link>
            </div>

            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/sign-up'>Testimonials</Link>
              <Link to='/sign-up'>Careers</Link>
              <Link to='/sign-up'>Investors</Link>
              <Link to='/sign-up'>Terms of Services</Link>
            </div>
          </div> 

          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/sign-up'>Testimonials</Link>
              <Link to='/sign-up'>Careers</Link>
              <Link to='/sign-up'>Investors</Link>
              <Link to='/sign-up'>Terms of Services</Link>
            </div>

            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/sign-up'>Testimonials</Link>
              <Link to='/sign-up'>Careers</Link>
              <Link to='/sign-up'>Investors</Link>
              <Link to='/sign-up'>Terms of Services</Link>
            </div>
          </div>


        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                TRVL<i className='fab fa-typo3'></i>
              </Link>
            </div>
            <small className='website-rights'>TRVL 2020</small>
            <div className='social-icons'>
              <Link className='social-icon-link facebook' to="/" target='_blank' aria-label='Facebook'>
                <i className='fab fa-facebook-f'></i>
              </Link>
              <Link className='social-icon-link instagram' to="/" target='_blank' aria-label='Instagram'>
                <i className='fab fa-instagram'></i>
              </Link>
              <Link className='social-icon-link youtube' to="/" target='_blank' aria-label='Facebook'>
                <i className='fab fa-youtube'></i>
              </Link>
              <Link className='social-icon-link twitter' to="/" target='_blank' aria-label='Instagram'>
                <i className='fab fa-twitter'></i>
              </Link>
              <Link className='social-icon-link linkedin' to="/" target='_blank' aria-label='Instagram'>
                <i className='fab fa-linkedin'></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Footer
