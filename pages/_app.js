import styles from "../styles/tailwind/tailwind.css"
import Layout from "../components/common/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
