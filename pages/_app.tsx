import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri:'https://bees-alpha.placely.com/graphql',
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
