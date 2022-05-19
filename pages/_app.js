import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
// import Script from 'next/script'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (<>
    {/* <Script src='bootstrap/dist/js/bootstrap.js' /> */}
    <Navbar />
      <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
