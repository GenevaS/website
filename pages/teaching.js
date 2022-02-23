import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Layout, { siteTitle } from '../components/layout'

export default function Teaching( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section>
          <p>Teaching Stuff</p>
        </section>
      </Layout>
    )
}
