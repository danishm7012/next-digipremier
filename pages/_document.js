import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/*   <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-DPELJ0TPLC'
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [] function gtag(){' '}
              {dataLayer.push(arguments)}
              gtag('js', new Date()) gtag('config', 'G-DPELJ0TPLC')`,
            }}
          ></script>

          {/* <!-- Global site tag (gtag.js) - Google Ads: 336754960 --> */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=AW-336754960'
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [] function gtag(){' '}
            {dataLayer.push(arguments)}
            gtag('js', new Date()) gtag('config', 'AW-336754960')`,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
