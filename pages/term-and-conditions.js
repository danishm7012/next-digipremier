import Title from '../components/proServiceDetail/Title'

const TermnCondition = () => {
  return (
    <>
      <Title img='/images/Banners/Term-&-Conditions.jpg' />

      <div className='section container'>
        <div className='section-title'>
          <h2>Terms & Conditions</h2>
          <p>
            Welcome to the website(http://progcc.org/). By using this website,
            you will be deemed to have accepted the following conditions. If you
            disagree with these conditions, please do not enter this site.
          </p>
        </div>
        <ul>
          <li className='termcondition'>
            This site belongs to Akventure Group of companies UAE, and some of
            the information on the site is published by the Association. Some of
            it is provided by the Association from other sources.
          </li>
          <li className='termcondition'>
            While the Akventure Group of companies UAE does its best to ensure
            that the information published on the website is published with
            up-to-date and accurate information, it does not guarantee that this
            information is correct, sufficient, and complete, and declares that
            it does not accept responsibility for viruses, deficiencies and/or
            errors in this information.
          </li>
          <li className='termcondition'>
            The information published on the website is for informational
            purposes. The Akventure Group of companies UAE does not accept any
            responsibility for the transactions made or made using this
            information.
          </li>
          <li className='termcondition'>
            Articles/blogs published on this website do not reflect the official
            views of the Association and bind the authors and opinion holders.
          </li>
          <li className='termcondition'>
            The information on other sites accessed by linking from our site is
            published by the relevant institutions and does not bind the
            Akventure Group of companies UAE.
          </li>
          <li className='termcondition'>
            Studies published on our website may be published without permission
            by showing the source, but the commercial purpose of this
            information is subject to the written permission of the group.
          </li>
          <li className='termcondition'>
            AKventures Group of companies reserves the right to change all
            information and design on this site without prior notice.
          </li>
        </ul>
      </div>
    </>
  )
}

export default TermnCondition
