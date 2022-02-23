import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Layout, { siteTitle } from '../components/layout'

export default function Publications( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section>
          <p>Publications</p>
        </section>
      </Layout>
    )
}
