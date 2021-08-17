import React from 'react'
import Image from 'next/image'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const TeamCard = ({
  img,
  Name,
  desig,
  details,
  facebook,
  twitter,
  insta,
  linkedin,
}) => {
  return (
    <div>
      <div className='team-card'>
        <div className='img text-center'>
          <Image src={img} width={512} height={512} />
        </div>
        <div className='text text-center'>
          {/* <h2 className="name ">{Name}</h2>
          <p className="desigination"> {desig} </p> */}
          <p style={{ fontSize: 13 }}>{details}</p>
          <div className='social-links'>
            <ul className='m-0 p-0'>
              <li>
                <a href={facebook}>
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href={twitter}>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href={insta}>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href={linkedin}>
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
