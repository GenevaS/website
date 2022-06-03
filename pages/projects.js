/* ---------------------------------------------------------------
 * PROJECTS (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'
import imgLoader from "../lib/imageloader"

import gscaleCard from "../public/images/gscale_businesscard_front.png"
import genevaCard from "../public/images/gscale_businesscard_back_Geneva.png"
import sashaCard from "../public/images/gscale_businesscard_back_Sasha.png"
import caretteCard from "../public/images/gscale_businesscard_Carette.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const githubicon = <FontAwesomeIcon className='has-text-black' icon={faGithubSquare} transform='grow-13' alt="GitHub Icon"/>
const youtubeicon = <FontAwesomeIcon className='has-text-black' icon={faYoutubeSquare} transform='grow-13' alt="YouTube Icon"/>

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

                  <a className="icon pr-5"
                     href="https://github.com/GenevaS"
                     target="_blank" rel="noopener noreferrer"
                     aria-label="Link to Geneva's GitHub">
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
                                pictureSrc={null}
                                lighter>
                        <p>
                          It&#39;s 2022, so I decided that a personal website was an important
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

                      <InfoTile tileTitle="Companion Cube Calculator (C&#179;)"
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

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='column'>
              <div className="card">
                <header className="card-header">
                  <h1 className="card-header-title">
                    Non-Technical Projects
                  </h1>
                </header>
              </div>
            </div>
            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">

                      <InfoTile tileTitle={
                            <p className='has-text-weight-medium px-3'>
                              Faculty of Engineering and McMaster University Three Minute Thesis
                              <br></br>
                              (3MT) Competitions
                            </p>
                          }
                                tileLink={
                                  <p className='has-text-weight-medium px-3'>
                                    March 2019,
                                    <br></br>
                                    October 2018
                                  </p>
                                }
                                pictureSrc={null}
                                lighter>
                        <p>
                            I
                            had <a className="is-link"
                                   href='https://gs.mcmaster.ca/current-students/resources/three-minute-thesis/'
                                   target="_blank" rel="noopener noreferrer">three minutes and one static slide</a> to
                            convey what I&#39;ve been working on for my Ph.D. I had to
                            <span className='has-text-weight-medium'>communicate the problem and what
                            I was doing about it</span> to a panel of judges that were not familiar
                            with my work or field. Needless to say, it was a challenge (and
                            public speaking is one of my least favourite things to do).
                        </p>
                        <p>
                          I did it though, and am quite pleased with how I did. Audience members who know
                          me were surprised that I could speak that loudly. Unfortunately, I did not place
                          in either the faculty or university-wide competitions.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                          <p className='has-text-weight-medium px-3'>
                            First Ubisoft Future Women in Games Mentorship
                          </p>
                        }
                        tileLink={
                          <p className='has-text-weight-medium px-3'>
                            October 2019
                          </p>
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
                          <p className='has-text-weight-medium px-3'>
                            G-ScalE Logos and Business Cards
                            <br></br>
                            <i>G-ScalE Lab, McMaster University</i>
                          </p>
                      }
                      tileLink={
                        <p className='has-text-weight-medium px-3'>
                          2018
                        </p>
                      }
                              pictureSrc={null}
                              lighter>
                        <p>
                          When we were discussing how to best <span className='has-text-weight-medium'>market the work we do</span> at
                          the <a className='is-link'
                                 href='https://gscale.cas.mcmaster.ca/'
                                 target="_blank" rel="noopener noreferrer">Gaming Scalability Environment (G-ScalE) lab</a>,
                          my supervisor, lab mates, and I decided that having a <span className='has-text-weight-medium'>logo</span> was
                          a good idea. We could put it on our presentation slides, and visually distinguish ourselves online. You can
                          see some of this work in the wild
                          on <a className="is-link"
                                href="https://twitter.com/lab_scale"
                                target="_blank" rel="noopener noreferrer">G-ScalE&#39;s Twitter page</a>,
                          and in the footer of this page next to the link to my profile on the G-ScalE website.
                          We also decided to make some business cards to give out at meetings and
                          conferences.
                        </p>
                        <p>
                          This was a fun project. It let me practice
                          my <span className='has-text-weight-medium'>visual design and Photoshop skills</span>, <span className='has-text-weight-medium'>incorporate
                          feedback</span>  from other members of the lab, and
                          ensure that <span className='has-text-weight-medium'>certain
                          pieces could scale well</span> if its size changed on a webpage.
                        </p>

                        <div className='is-flex is-justify-content-space-evenly is-flex-wrap-wrap
                                        is-full-width
                                        mt-4'>
                          <Image
                            priority
                            loader={imgLoader}
                            src={gscaleCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>

                          <Image
                            priority
                            loader={imgLoader}
                            src={caretteCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>

                          <Image
                            priority
                            loader={imgLoader}
                            src={genevaCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>

                          <Image
                            priority
                            loader={imgLoader}
                            src={sashaCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>
                        </div>
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
