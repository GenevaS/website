import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Layout, { siteTitle } from '../components/layout'

export default function Fun( ) {
    return (
        <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <NavBar></NavBar>

      <section>
        <p>Fun Stuff</p>
      </section>

      <Footer></Footer>
    </Layout>
    )
}
