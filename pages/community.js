import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Community( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section>
          <h2 className='title has-text-centered pt-6'>
            Community Engagement Stuff
          </h2>

          <article>
              Life in Computing and Software ay 2018-Sept 2020
                ● Assisted with event planning and execution as part of an ongoing initiative
                to improve student quality of life within the Computing and Software
                department at McMaster University
                ● Vice President Administration (May 2019 - September 2020)
                ● Ongoing role providing advice and information for continuing events

              McMaster IEEE Student Branch Sept 2014-Apr 2017
                ● Taught lab safety training and hands-on soldering skills to undergraduate students
                ● Responded to general student inquiries about branch events and services
                ● Branch Secretary (September 2015 - April 2016)
          </article>
        </section>
      </Layout>
    )
}
