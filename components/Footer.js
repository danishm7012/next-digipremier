import React, { useState } from 'react'
import SidebarSocial from './sidebarSocial'
import { Form } from 'react-bootstrap'
import Message from './common/Message'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import the FontAwesomeIcon component
import { faPhone, faChevronRight } from '@fortawesome/free-solid-svg-icons' // import the icons you needz
import { FaAngleRight } from 'react-icons/fa'
import Newsletter from './newsletter'
import Link from 'next/link'
import MessengerCustomerChat from 'react-messenger-customer-chat'

import {
  faWhatsapp,
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterestP,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons' // import the icons you needz

const Footer = () => {
  return (
    <>
      <footer id='footer'>
        {
          <div className='footer-top'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4 col-md-4'>
                  <div className='footer-info'>
                    <img
                      src='/images/logo.png'
                      className='d-inline-block align-top '
                      alt='DIGI Premier'
                      height='70'
                      width='250'
                    />

                    <br />

                    <p>
                      <strong>info@digipremier.com</strong>
                    </p>
                    <div className='social-links mt-3'>
                      <a
                        href='https://www.facebook.com/digipremier1/'
                        target='blank'
                      >
                        <FontAwesomeIcon
                          className='footer-sicial-icon'
                          icon={faFacebook}
                        ></FontAwesomeIcon>
                      </a>
                      <a href='https://twitter.com/digipremier' target='blank'>
                        <FontAwesomeIcon
                          className='footer-sicial-icon'
                          icon={faTwitter}
                        ></FontAwesomeIcon>
                      </a>
                      <a
                        href='https://www.linkedin.com/in/digi-primier-8bb11720a/'
                        target='blank'
                      >
                        <FontAwesomeIcon
                          className='footer-sicial-icon'
                          icon={faLinkedin}
                        ></FontAwesomeIcon>
                      </a>
                      <a
                        href='https://www.instagram.com/digipremier/'
                        target='blank'
                      >
                        <FontAwesomeIcon
                          className='footer-sicial-icon'
                          icon={faInstagram}
                        ></FontAwesomeIcon>
                      </a>
                      <a
                        href='https://www.pinterest.com/digipremier/'
                        target='blank'
                      >
                        <FontAwesomeIcon
                          className='footer-sicial-icon'
                          icon={faPinterestP}
                        ></FontAwesomeIcon>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 footer-links'>
                  <h4>Useful Links</h4>
                  <ul className='usefull-links'>
                    <li>
                      <Link href='/'>
                        <a>
                          <FaAngleRight className='icon mr-2' />
                          <span className='ml-2'> Home</span>
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href='/about'>
                        <a>
                          <FaAngleRight className='icon mr-2' />
                          <span className='ml-2'> About us</span>
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href='/careers'>
                        <a>
                          <FaAngleRight className='icon mr-2' />
                          <span className='ml-2'> Career</span>
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href='/news'>
                        <a>
                          <FaAngleRight className='icon mr-2' />
                          <span className='ml-2'>Blogs</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/term-and-conditions'>
                        <a>
                          <FaAngleRight className='icon mr-2' />
                          <span className='ml-2'>Terms & Condition</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/privacy-policy'>
                        <a>
                          <FaAngleRight className='icon mr-2' />
                          <span className='ml-2'>Privacy Policy</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='col-lg-4 col-md-4 footer-newsletter'>
                  <h4>Our Newsletter</h4>
                  <p>
                    Enter your email ID to get the latest news and feature
                    stories on our businesses, community initiatives, heritage
                    and people.
                  </p>

                  <Newsletter />
                  {/* <Form
                    novalidate
                    validated={validated}
                    onSubmit={submitHandler}
                  >
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="submit" value="Subscribe" />
                    {errors.email && (
                      <Message variant="danger">{errors.email}</Message>
                    )}
                  </Form> */}
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <p>
                    <br />
                    <span className='office-name'>UAE Office:</span> P.O. BOX
                    415253, Dubai, UAE Business Bay, Park Lane Plaza, 12th
                    Floor, Office No. 1213 <br />
                    <br />
                    <strong>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{' '}
                      <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                    </strong>
                    {'   '}
                    +971 58 1439463
                    <br />
                    <strong>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{' '}
                      <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                    </strong>
                    {'   '}
                    +971 54 5277366
                  </p>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <p>
                    <br />
                    <span className='office-name'>UK Office:</span>
                    3rd Floor, 244 Edgware Road, London W2 1DS, UK. <br />
                    <br />
                    <strong>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{' '}
                      <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                    </strong>
                    {'   '}
                    +44 7391 758 721
                  </p>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <p>
                    <br />
                    <span className='office-name'>Pakistan Office:</span> 2nd
                    Floor MB-269, DHA phase 6, Lahore, Pakistan.
                    <br />
                    <br />
                    <strong>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{' '}
                      <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                    </strong>
                    {'   '}
                    +92 333 0671555
                  </p>
                </div>
              </div>
            </div>

            <div className='pt-4 copy-write text-white text-center'>
              Copyright &copy; {new Date().getFullYear()}
              <strong>
                <span> DIGI PREMIER</span>
              </strong>
              . All Rights Reserved.
            </div>
          </div>
        }
      </footer>
      <MessengerCustomerChat pageId='<PAGE_ID>' appId='<APP_ID>' />
      <SidebarSocial />
    </>
  )
}

export default Footer
