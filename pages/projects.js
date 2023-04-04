/* ---------------------------------------------------------------
 * PROJECTS (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faFileZipper } from '@fortawesome/free-solid-svg-icons'


const githubicon = <FontAwesomeIcon className='has-text-black' icon={faGithubSquare} transform='grow-13' alt="GitHub Icon"/>
const zipicon = <FontAwesomeIcon className='has-text-black' icon={faFileZipper} transform='grow-7' alt="ZIP File Icon"/>


const websiteProjectLink = <a className='icon'
                              href="https://github.com/GenevaS/website"
                              target="_blank" rel="noopener noreferrer"
                              aria-label="Go to GitHub repository for this website">
                              {githubicon}
                            </a>
const c3projectLink = <a className='icon'
                         href="https://github.com/GenevaS/CAS741"
                         target="_blank" rel="noopener noreferrer"
                         aria-label="Go to GitHub repository for the Companion Cube Calculator">
                        {githubicon}
                      </a>

const emgineprojectLink = <a className='icon'
                            href="https://github.com/GenevaS/EMgine"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="Go to GitHub repository for the EMgine Project">
                            {githubicon}
                          </a>

const skyrimmodprojectLink = <a className='icon'
                         href="https://macsphere.mcmaster.ca/bitstream/11375/21369/3/Smith_Geneva_M_2017April_MAScSoftwareEngineering_GLaDOS.zip"
                         target="_blank" rel="noopener noreferrer"
                         aria-label="Get ZIP file for the Skyrim Mod from MacSphere">
                        {zipicon}
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
                    Technical & Design Projects
                  </h1>

{/*                   <a className="icon pr-5"
                     href="https://github.com/GenevaS"
                     target="_blank" rel="noopener noreferrer"
                     aria-label="Link to Geneva's GitHub">
                    {githubicon}
                  </a> */}
                </header>
              </div>
            </div>

            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">

                    <InfoTile tileTitle={
                                  <p>
                                    EMgine C# Software Library
                                    <br className='my-1'></br>
                                    <i className='has-text-weight-medium'>October 2022 to Present</i>
                                  </p>
                              }
                                tileLink={emgineprojectLink}
                                pictureSrc={null}
                                lighter>
                        <p>
                          .
                        </p>
                      </InfoTile>

                      <InfoTile pictureOnLeft
                                tileTitle={
                                  <p>
                                    This Website!
                                    <br className='my-1'></br>
                                    <i className='has-text-weight-medium'>February 2022 to Present</i>
                                  </p>
                              }
                                tileLink={websiteProjectLink}
                                pictureSrc={null}
                                lighter>
                        <p>
                          It was 2022, so I decided that a personal website was an important
                          part of making myself known in academia and industry (especially because
                          I&#39;m trained to do software engineering...). And here we are!
                        </p>
                        <p>
                          Web development is new to me, so this was also an opportunity to learn
                          new things. This is why I chose to use
                          the <a className='is-link'
                                 href='https://nextjs.org/'
                                 target="_blank" rel="noopener noreferrer">Next.js React Framework</a> and <a className='is-link'
                                                                                                              href='https://bulma.io/'
                                                                                                              target="_blank" rel="noopener noreferrer">Bulma CSS
                          Framework</a> instead of something like <a className='is-link'
                                                                     href='https://wordpress.com/'
                                                                     target="_blank" rel="noopener noreferrer">WordPress</a> or <a className='is-link'
                                                                                                                                   href='https://jekyllrb.com/'
                                                                                                                                   target="_blank" rel="noopener noreferrer">Jekyll</a>.
                        </p>
                        <p>
                          My goals are to present relevant and interesting things about myself
                          and my work, while also <span className='has-text-weight-medium'>creating a visually appealing and responsive
                          website</span>. I also aimed to make this webpage <span className='has-text-weight-medium'>accessible</span> by
                          following <a className='is-link'
                                       href='https://www.w3.org/WAI/standards-guidelines/wcag/'
                                       target="_blank" rel="noopener noreferrer">WACG</a> to
                          the best of my understanding. I&#39;m sure there are accesibility improvements to make,
                          so do feel free to open a <a className='is-link'
                                                       href='https://github.com/GenevaS/website/issues'
                                                       target="_blank" rel="noopener noreferrer">Git Issue</a> in
                          this webpage&#39;s repository.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                          <p>
                            First Ubisoft Future Women in Games Mentorship
                            <br className='my-1'></br>
                            <i className='has-text-weight-medium'>October 2019</i>
                          </p>
                        }
                        tileLink={
                          <span></span>                       
                        }
                          pictureSrc={null}
                          lighter>
                        <p>
                          I admire many of Ubisoft&#39;s games, so naturally I jumped at the chance to
                          participate in
                          their <a className="is-link"
                                   href='https://toronto.ubisoft.com/ubisoft-future-women-in-games-mentorship-winners/'
                                   target="_blank" rel="noopener noreferrer">Game Design Challenge</a>. <span className='has-text-weight-medium'>Centering
                          on the theme</span> &#34;my morning routine&#34;, I focused on
                          a challenge that I face almost daily: escaping my apartment
                          without one of my adorable cats tearing a hole in my stockings.
                        </p>
                        <p>
                          I settled on a <span className='has-text-weight-medium'>horror-style stealth game</span> comparable
                          to <a className="is-link"
                                href='https://amnesiagame.com/#main'
                                target="_blank" rel="noopener noreferrer">Frictional Games&#39; Amnesia: The Dark Descent</a> and <a className="is-link"
                                                                                                                                     href='https://www.blooberteam.com/layers-of-fear'
                                                                                                                                     target="_blank" rel="noopener noreferrer">Bloober
                                                                                                                                     Team&#39;s Layers of Fear</a>.
                          I decided to play with the idea of feline spirits that are either out to get you, or
                          will (maybe) help you. I <span className='has-text-weight-medium'>submitted a successful one-page
                          pitch describing a the concept and plans for prototyping and testing it</span>. Next,
                          I <span className='has-text-weight-medium'>created a Design Solution Presentation</span>, outlining
                          the intended player experience and success criteria, my inspirations for the design, the game feature
                          itself, and how I would build a prototype in five weeks. Unfortunately, I was not invited to continue
                          past this stage. Still, I am very pleased with the ideas I created for this and I am grateful for the
                          opportunity to work on
                          my <span className='has-text-weight-medium'>game design skills</span>.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                                            <p>
                                              Companion Cube Calculator (C&#179;)
                                              <br className='my-1'></br>
                                              <i className='has-text-weight-medium'>September to December 2017</i>
                                            </p>
                                          }
                                tileLink={c3projectLink}
                                pictureSrc={null}
                                lighter>
                        <p>
                          I created this tool for my doctoral project—named GLaDOS at the
                          time, after a character in
                          the <a className='is-link'
                                 href="https://half-life.fandom.com/wiki/Portal"
                                 target="_blank" rel="noopener noreferrer">Portal</a> games—to
                          help me test the range of a mathematical function when the domain
                          of its variables is known. I completed it as a course project, paying
                          particular attention to the <span className='has-text-weight-medium'>design process</span> and
                          accompanying <span className='has-text-weight-medium'>documentation</span>. I implemented C&#179;
                          in <span className='has-text-weight-medium'>C#</span> because of its GUI Builder tool so that the
                          finished project would be more user-friendly (and nicer to look at).
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                                            <p>
                                              Bethesda's <a className='is-link'
                                                            href='https://elderscrolls.bethesda.net/en/skyrim'
                                                            target="_blank" rel="noopener noreferrer">The Elder Scrolls V: Skyrim</a> "GLaDOS" Mod
                                              <br className='my-1'></br>
                                              <i className='has-text-weight-medium'>September to December 2017</i>
                                            </p>
                                          }
                                tileLink={skyrimmodprojectLink}
                                pictureSrc={null}
                                lighter>
                        <p>
                          .
                        </p>
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
