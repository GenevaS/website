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
                                pictureSrc='/images/websiteSnip.png'
                                pictureAlt="Snippet image of this website">
                        <p>
                          It&#39;s 2022, so I decided that a personal website was an important
                          part of making myself known in academia and industry (especially because
                          I&#39;m trained to do software engineering...). And here we are!
                        </p>
                        <p>
                          Web development is new to me, so this was also an opportunity to learn
                          new things. This is why I chose to use
                          the <a className='is-link' href='https://nextjs.org/'>Next.js React Framework</a> and <a className='is-link' href='https://bulma.io/'>Bulma CSS Framework</a> instead
                          of something like <a className='is-link' href='https://wordpress.com/'>WordPress</a> or <a className='is-link' href='https://jekyllrb.com/'>Jekyll</a>.
                        </p>
                        <p>
                          My goals are to present relevant and interesting things about myself
                          and my work, while also creating a visually appealing and responsive
                          website. I also aimed to make this webpage accessible by
                          following <a className='is-link' href='https://www.w3.org/WAI/standards-guidelines/wcag/'>WACG</a> to
                          the best of my understanding. I&#39;m sure there are accesibility improvements to make,
                          so do feel free to open a <a className='is-link' href='https://github.com/GenevaS/website/issues'>Git Issue</a> in
                          this webpage&#39;s repository.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle="Companion Cube Calculator (C&#179;)"
                                tileLink={c3projectLink}
                                pictureSrc='/images/c3project-square.png'
                                pictureAlt="Snippet image of C&#179;">
                        <p>
                          I created this tool for my doctoral project—named GLaDOS at the
                          time, after a character in
                          the <a className='is-link' href="https://half-life.fandom.com/wiki/Portal">Portal</a> games—to
                          help me test the range of a mathematical function when the domain
                          of its variables is known. I completed it as a course project, and
                          paid particular attention to the design process and accompanying
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
