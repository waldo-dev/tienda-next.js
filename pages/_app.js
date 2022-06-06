import injectContext from '../store/appContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default injectContext(MyApp)
