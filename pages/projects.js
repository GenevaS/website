import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const githubicon = <FontAwesomeIcon className='has-text-black' icon={faGithubSquare} transform='grow-13' alt="GitHub Icon"/>

export default function Projects( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className='is-full-width pt-6'>
          <div className='columns is-flex-direction-column px-6'>
            <div className='column'>
              <div className="card">
                <header className="card-header">
                  <h1 className="card-header-title">
                    Technical Projects
                  </h1>

                  <div className="pt-3 pr-4" aria-label="Link to GitHub">
                    <a className="" href="https://github.com/GenevaS">
                       {githubicon}
                    </a>
                  </div>
                </header>
              </div>
            </div>

            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification is-primary px-3
                                          is-flex is-flex-direction-row is-align-items-center">
                        <figure className="image is-128x128 is-flex is-align-items-center">
                            <img src="/images/smith_headshot.jpg" />
                        </figure>

                        <div className='is-flex-grow-1 is-width-70-percent pl-3'>
                            <p className="title">Vertical...</p>
                            <p className="subtitle">Top tile</p>
                            This Website!
                        </div>
                      </article>

                      <article className="tile is-child notification is-primary-light px-3
                                          is-flex is-flex-direction-row is-align-items-center">
                        <div className='is-flex-grow-1 is-width-70-percent pr-3'>
                            <p className="title">...tiles</p>
                            <p className="subtitle">Bottom tile</p>
                            Companion Cube Calculator
                        </div>

                        <figure className="image is-128x128 is-flex is-align-items-center">
                            <img src="/images/smith_headshot.jpg" />
                        </figure>
                      </article>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='column'>
              <div className="card">
                <header className="card-header">
                  <h1 className="card-header-title">
                    Other Projects
                  </h1>
                </header>
              </div>
            </div>
            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">

                      <article className="tile is-child notification is-primary px-3
                                          is-flex is-flex-direction-row is-align-items-center">
                        <figure className="image is-128x128 is-flex is-align-items-center">
                            <img src="/images/smith_headshot.jpg" />
                        </figure>

                        <div className='is-flex-grow-1 is-width-70-percent pl-3'>
                            <p className="title">...tiles</p>
                            <p className="subtitle">Bottom tile</p>
                            GScalE Branding
                        </div>
                      </article>

                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>
      </Layout>
    )
}
