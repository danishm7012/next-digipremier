import Title from '../components/proServiceDetail/Title'

const privacyPolicy = () => {
  return (
    <>
      <Title img='/images/Banners/Privacy-Policy.jpg' />

      <div className='section container'>
        <div className='section-title'>
          <h2>Privacy Policy</h2>
          <p>
            Our Group adopts the following basic rules to protect the
            confidentiality of the information you provide on this website, with
            a service approach focused on customer satisfaction and security.
          </p>
        </div>
        <ul>
          <li className='termcondition'>
            The information of our customers is not shared with third parties in
            any way or form, without the knowledge and approval of the
            customers, except institutions and authorities authorized to access
            this information as stipulated by the provisions of the relevant
            legislation.
          </li>
          <li className='termcondition'>
            To protect the confidentiality of our customer's personal
            information, our Group has taken the necessary measures by keeping
            the system and internet infrastructure at the most reliable level.
            In addition, please do not hesitate to consult our Group on matters
            that require further information.
          </li>
          <li className='termcondition'>
            Our Group ensures that the institutions from which it receives
            support services comply with our Group's confidentiality standards
            and conditions.
          </li>
          <li className='termcondition'>
            Our Group ; makes no warranties, implied, express or legal,
            regarding the information on the website, including but not limited
            to warranties of non-infringement of third party rights, ownership,
            transferability, merchantability, fitness for a particular purpose,
            and/or computer virus-freeness.
          </li>
        </ul>
      </div>
    </>
  )
}

export default privacyPolicy
