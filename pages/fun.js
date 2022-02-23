import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Fun( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section>
          <h2 className='title has-text-centered pt-6'>
            Fun Stuff
          </h2>
        </section>

    </Layout>
    )
}
