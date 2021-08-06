import Head from 'next/head'

const Meta = ({ title, keywords, description, canonical, ogImage }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:title' content={`${title} - Digipremier`} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <link rel='canonical' href={`https://www.digipremier.org/${canonical}`} />
      <meta name='robots' content='index, follow' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />

      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'DigiPremier | Home',
  keywords: 'Digital marketing Services',
  description: `Digital Marketing is the top-most flourishing field globally. The role of digital media marketing and new automated supporting tools in successful business increase manifold in a few years. It seems permanent phenomena in the future as well. At present, it is the key to marketing for promotion of brands and reaching high potential of customers, hot and convertible leads.`,
}

export default Meta
