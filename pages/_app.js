import '../styles/globals.css'
import {MoralisProvider} from "react-moralis"

function MyApp({ Component, pageProps }) {
  return(
  <MoralisProvider
  
  appId='h9imAhicwLTqse4iPz11XwemAZpjHJFdirfSirmZ' 
    serverUrl='https://vfl5oefwezfa.usemoralis.com:2053/server'
  >
  <Component {...pageProps} />
  </MoralisProvider>
  );
}

export default MyApp
