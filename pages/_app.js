import '../styles/globals.css'
import "../styles/common.css";

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

// Main Components
import { Navbar, Footer } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
