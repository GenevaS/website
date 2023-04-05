/* ---------------------------------------------------------------
 * PROJECTS (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Link from 'next/link'

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

const thetempleDocsLink = <a className='icon'
                             download target="_blank" rel="noopener noreferrer"
                             aria-label="Download the ZIP file with The Temple's pitch and design solution presentation">
                             {zipicon}
                          </a>

const skyrimmodprojectLink = <a className='icon'
                         href="https://macsphere.mcmaster.ca/bitstream/11375/21369/3/Smith_Geneva_M_2017April_MAScSoftwareEngineering_GLaDOS.zip"
                         target="_blank" rel="noopener noreferrer"
                         aria-label="Get ZIP file for the GLaDOS Skyrim Mod from MacSphere">
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
                          EMgine is a game development tool for designers to give their NPCs &#34;emotions&#34;. 
                          It does this by providing a library for &#34;generating 
                          emotions&#34; given the current state of the game entity &#34;expriencing
                          &#34; emotion and the game world. The end goal is to give designers
                          another option for making believable and emotionally engaging game characters.
                        </p>

                        <p>
                          Game design is both a creative and technical endeavour, so I am using a user-centric 
                          design approach to ensure that both game designers and players are always at the forefront
                          of EMgine&#39;s design. This lead to the library design, which affords game designers the choice
                          of when, how, and what parts of it they use in their games. Game designer needs also drove 
                          the decision to use C# because it is one of the programming languages supported 
                          in <a className='is-link'
                                href='https://unity.com/solutions/create-games'
                                target="_blank" rel="noopener noreferrer">Unity Game Engine</a>.
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
                          Web development was new to me, so it was also an opportunity to learn
                          new things. This was why I chose to use
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
                          and my work, while also creating a visually appealing and responsive
                          website. I also aimed to make this webpage accessible by
                          following <a className='is-link'
                                       href='https://www.w3.org/WAI/standards-guidelines/wcag/'
                                       target="_blank" rel="noopener noreferrer">WACG</a> to
                          the best of my understanding. I&#39;m sure there are many accessibility improvements to make,
                          so do feel free to open a <a className='is-link'
                                                       href='https://github.com/GenevaS/website/issues'
                                                       target="_blank" rel="noopener noreferrer">Git Issue</a> in
                          this webpage&#39;s repository.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                          <p>
                            First Ubisoft Future Women in Games Mentorship—Game Design Challenge
                            <br className='my-1'></br>
                            <i className='has-text-weight-medium'>September to October 2019</i>
                          </p>
                        }
                        tileLink={
                          <Link href="/assets/TheTemple_GameDesign_Pitch_And_DesignSolution.zip">
                            {thetempleDocsLink}
                          </Link>
                        }
                          pictureSrc={null}
                          lighter>
                        <p>
                          I admire many of Ubisoft&#39;s games, so naturally I jumped at the chance to
                          participate in
                          their <a className="is-link"
                                   href='https://toronto.ubisoft.com/ubisoft-future-women-in-games-mentorship-winners/'
                                   target="_blank" rel="noopener noreferrer">Game Design Challenge</a>. Centering
                          on the theme &#34;my morning routine&#34;, I focused on a challenge that I face almost 
                          daily: escaping my apartment without one of my adorable cats tearing a hole in my stockings.
                        </p>
                        <p>
                          I settled on a horror-style stealth game comparable
                          to <a className="is-link"
                                href='https://amnesiagame.com/#main'
                                target="_blank" rel="noopener noreferrer">Frictional Games&#39; Amnesia: The Dark Descent</a> and <a className="is-link"
                                                                                                                                     href='https://www.blooberteam.com/layers-of-fear'
                                                                                                                                     target="_blank" rel="noopener noreferrer">Bloober
                                                                                                                                     Team&#39;s Layers of Fear</a>.
                          I decided to play with the idea of feline spirits that are either out to get you, or
                          will (maybe) help you. I submitted a successful one-page
                          pitch describing a the concept and plans for prototyping and testing it. Next,
                          I created a Design Solution Presentation, outlining
                          the intended player experience and success criteria, my inspirations for the design, the game feature
                          itself, and how I would build a prototype in five weeks. Unfortunately, I was not invited to continue
                          past this stage. Still, I am very pleased with the ideas I created for this and I am grateful for the
                          opportunity to work on my game design skills.
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
                          I created this tool for my GLaDOS project
                          , <a className='is-link'
                               href='https://half-life.fandom.com/wiki/GLaDOS'
                               target="_blank" rel="noopener noreferrer">named for a character in
                          the Portal</a> games—to help me test the range of a mathematical function when 
                          the domain of its variables is known. I completed it as a course project, paying
                          particular attention to the design process and accompanying documentation. I implemented 
                          C&#179; in C# because of its GUI Builder tool so that the finished project would be more 
                          user-friendly (and nicer to look at).
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                                            <p>
                                              &#34;GLaDOS&#34; Mod for Bethesda&#39;s <a className='is-link'
                                                            href='https://elderscrolls.bethesda.net/en/skyrim'
                                                            target="_blank" rel="noopener noreferrer"><i>The Elder Scrolls V: Skyrim</i></a> 
                                              <br className='my-1'></br>
                                              <i className='has-text-weight-medium'>2016 to 2017</i>
                                            </p>
                                          }
                                tileLink={skyrimmodprojectLink}
                                pictureSrc={null}
                                lighter>
                        <p>
                          Before my work on EMgine, my investigation into believable game characters &#34;with 
                          emotions&#34; got me to 
                          try <a className='is-link'
                                 href='https://en.wikipedia.org/wiki/Video_game_modding'
                                 target="_blank" rel="noopener noreferrer">modding</a>. This allowed me to work 
                          with a pre-existing game with well-defined characters so that I only needed to worry about 
                          how emotion &#34;worked&#34; rather than how I could test them in a game. The 
                          modding community for <i>Skyrim</i> is very large and active, so it is a good place for 
                          experiementing with different ideas to see how they affect the game&#39;s player experience.
                        </p>

                        <p>
                          This was a fun and interesting look into one of Bethesda&#39;s development tools and their 
                          implementation of characters. I designed my mod so that characters all used the same 
                          &#34;processing&#34; modules; their differences are contained in character-specific 
                          &#34;configuration data&#34; based on a set of tags I created. Each character is 
                          assigned &#34;values&#34; with data necessary for emotion generation. Picking these 
                          values was entertaining because I got to imagine how each character feels about different 
                          aspects of their world based on their—often sparse—narrative descriptions.
                        </p>

                        <p>
                          Even though I was only able to give the citizens 
                          of <a className='is-link'
                                href='https://en.uesp.net/wiki/Skyrim:Windhelm'
                                target="_blank" rel="noopener noreferrer">Windhelm</a> emotions with the time I had, 
                          it was still enough for my play testers to notice and be intrigued by the characters&#39; new 
                          reactions to them.
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
