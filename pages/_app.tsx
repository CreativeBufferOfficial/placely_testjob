import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { API_ENDPOINT } from '../assets/constants'

const client = new ApolloClient({
  uri:API_ENDPOINT,
  cache : new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={client}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ApolloProvider>
  )
}
