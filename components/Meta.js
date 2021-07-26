import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'DigiPremier | Home',
  keywords: 'Digital marketing Services',
  description: `Digital Marketing is the top-most flourishing field globally. The role of digital media marketing and new automated supporting tools in successful business increase manifold in a few years. It seems permanent phenomena in the future as well. At present, it is the key to marketing for promotion of brands and reaching high potential of customers, hot and convertible leads.`,
}

export default Meta
