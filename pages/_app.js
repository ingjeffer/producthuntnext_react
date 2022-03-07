import { FirebaseContext, firebase } from '../firebase'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={{firebase}}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp
