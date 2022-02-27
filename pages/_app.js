import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'academicons/css/academicons.min.css'
config.autoAddCss = false

import '../styles/global.css'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
