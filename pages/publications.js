import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Publications( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section>
          <h2 className='title has-text-centered pt-6'>
            Publications
          </h2>

          <div className='columns px-6'>
            <div className='column'>
              <div className="card">
                <div className="card-image">

                </div>

                <div className="card-content">
                  <div className="media">
                    <div className="media-left">


                    </div>
                    <div className="media-content">
                      <p className="title is-4">John Smith</p>
                      <p className="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>

            <div className='column'>
              <div className="card">
                <div className="card-image">

                </div>

                <div className="card-content">
                  <div className="media">
                    <div className="media-left">


                    </div>
                    <div className="media-content">
                      <p className="title is-4">John Smith</p>
                      <p className="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
}
