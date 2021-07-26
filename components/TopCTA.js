import { Navbar, Nav } from 'react-bootstrap'
import SamplePage from './translatorApi/TestedApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import the FontAwesomeIcon component
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons' // import the icons you needz

function HeaderTop() {
  return (
    <div>
      <Navbar className='nav1' expand='md'>
        <Nav className='textcolors nav1options'>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link
              href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@paradisegoc.com&su=Our beloved DigiPremier goc&body=Leave a message!%20'
              target='_blank'
            >
              <FontAwesomeIcon
                className='CTA-icon'
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <span className='lowercase'>info@digipremier.org</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link href='tel:+923330668656' target='_blank'>
              <FontAwesomeIcon
                className='CTA-icon'
                icon={faPhone}
              ></FontAwesomeIcon>
              <span>+92 333 0668 656</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className='translateApi'>
            <SamplePage />
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

export default HeaderTop
