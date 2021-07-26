import Layout from '../components/Layout'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <link
        href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
        rel='stylesheet'
      />

      <link href='./vendor/bootstrap/css/bootstrap.min.css' rel='stylesheet' />

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
