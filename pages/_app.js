import '../styles/globals.css'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  console.log("this is _app.js");
  return <Component {...pageProps} />
}

export default MyApp
