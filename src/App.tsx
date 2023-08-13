import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { Layout } from '@src/components'
import { theme } from './theme'
import { LandingPage } from './pages'

export default function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
    <Layout>
      <LandingPage></LandingPage>
    </Layout>
    </ChakraProvider>
  )
}
