import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const githubicon = <FontAwesomeIcon className='has-text-black' icon={faGithubSquare} transform='grow-13' alt="GitHub Icon"/>

const websiteProjectLink = <a className='icon' href="https://github.com/GenevaS/website">
                         {githubicon}
                       </a>
const c3projectLink = <a className='icon' href="https://github.com/GenevaS/CAS741">
                        {githubicon}
                      </a>

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
                <header className="card-header is-align-items-center">
                  <h1 className="card-header-title">
                    Technical Projects
                  </h1>

                  <a className="icon pr-5" href="https://github.com/GenevaS" aria-label="Link to GitHub">
                    {githubicon}
                  </a>
                </header>
              </div>
            </div>

            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">

                      <InfoTile pictureOnLeft
                                tileTitle="This Website!"
                                tileLink={websiteProjectLink}
                                pictureSrc='/images/smith_headshot.jpg'
                                pictureAlt="Tile Picture">
                        <p className="title">Vertical...</p>
                        <p className="subtitle">Top tile</p>
                        This Website!
                      </InfoTile>

                      <InfoTile tileTitle="Companion Cube Calculator (C&#179;)"
                                tileLink={c3projectLink}
                                pictureSrc='/images/c3project-square.png'
                                pictureAlt="Tile Picture">
                        <p>
                          I created this tool for my doctoral project—named GLaDOS at the time—to
                          help me test the range of a mathematical function when the domain
                          of its variables is known. I completed it as a course project, and paid
                          particular attention to the design process and accompanying
                          documentation. I implemented C&#179; in C# because of its GUI Builder
                          tool so that the finished project would be more user-friendly (and
                          nicer to look at).
                        </p>
                      </InfoTile>

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

                      <InfoTile pictureOnLeft
                                tileTitle="GScalE Logos and Business Cards"
                                pictureSrc='/images/smith_headshot.jpg'
                                pictureAlt="Tile Picture">
                        <p className="title">...tiles</p>
                        <p className="subtitle">Bottom tile</p>
                        GScalE Branding
                      </InfoTile>

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
