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

          <div className='columns is-flex is-flex-direction-column px-6'>
            <div className='column'>
              <div className="card">
                <div className="card-image">

                </div>

                <div className="card-content">
                  <div className="content">
                    <p><span className='has-background-primary-light'>Geneva M. Smith</span> and Jacques Carette. 2022.
                    What Lies Beneath—A Survey of Affective Theory Use in Computational Models of Emotion.
                    Submitted December 8, 2021 to the <i>IEEE Transactions on Affective Computing</i>.</p>
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
