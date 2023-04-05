/* ---------------------------------------------------------------
 * HOME/ABOUT ME PAGE (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import imgLoader from "../lib/imageloader"

import genevaHeadshot from "../public/images/smith_headshot.jpg"

const profilePicture = <Image
                          priority
                          loader={imgLoader}
                          src={genevaHeadshot}
                          height={200}
                          width={200}
                          className="is-rounded is-square"
                          alt=""
                        />;

const quickIntro = (
  <div>
    <p className='title'>Hi!</p>

    <p className='subtitle'>I&#39;m Geneva, a Ph.D. candidate in
      the <a className="is-link"
             href="https://www.eng.mcmaster.ca/cas"
             target="_blank" rel="noopener noreferrer">Department of Computing and
      Software at McMaster University</a>.
    </p>

  </div>
);

/* ---------------------------------------------------------------
 * Function: Home
 * ---------------------------------------------------------------
 * Layout for the home/about me page.
 * ---------------------------------------------------------------
 */
export default function Home( ) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* ---------------------------------------------------------------
        * Section: Profile picture and quick introduction
        * ---------------------------------------------------------------
        * This is split into two parts so that it behaves differently for
        * small screens (mobile/tablet, tagged 'is-hidden-desktop) and
        * large ones (desktop and larger, tagged 'is-hidden-tablet').
        * ---------------------------------------------------------------
        */}
      <section>
        <div className='columns is-hidden-touch pt-6 px-6'>
          <div className='column is-centered'>
            <div className='columns is-justify-content-center is-align-items-center'>

              <section className='column is-narrow has-text-right'>
                <div className='image'>
                  {profilePicture}
                </div>
              </section>

              <section className='column content is-6 has-text-left pr-3'>
                {quickIntro}
              </section>

            </div>
          </div>
        </div>

        <div className='columns is-hidden-desktop is-flex-direction-column is-centered pt-6 px-6'>
          <div className='column'>
            <section className='image has-text-centered'>
              {profilePicture}
            </section>
          </div>

          <section className='column content is-centered has-text-centered'>
              {quickIntro}
          </section>
        </div>

        {/* ---------------------------------------------------------------
          * Section: About Me
          * ---------------------------------------------------------------
          * This is for listing my interests and education.
          * ---------------------------------------------------------------
        */}
        <section className='columns'>
          <div className='column px-6'>
            <p className='block px-5'>
              Broadly, I am interested in the research behind and design of software systems (although 
              I have been known to be interested in other things too). Most of my interest and focus is
              on <a className="is-link has-text-weight-medium"
                    href="https://en.wikipedia.org/wiki/Game_design"
                    target="_blank" rel="noopener noreferrer">Game Design</a>
              , <a className="is-link has-text-weight-medium"
                    href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"
                    target="_blank" rel="noopener noreferrer">Human-Computer Interactions (HCI)</a>
              , and <a className="is-link has-text-weight-medium"
                   href="https://en.wikipedia.org/wiki/Affective_computing"
                   target="_blank" rel="noopener noreferrer">Affective Computing</a>
              . These allow me to take a user/player-centric design approach and help bridge the worlds 
              of the people who design systems and the people who use them.
            </p>

            <p className='block px-5'>
              Right now, I am drawing on <i>all</i> of my research interests to design, implement, and test 
              EMgine (Emotion Engine), a software library for evaluating what emotion a computer-controlled 
              game character (Non-Player Character) is experiencing in the current game state. The goal 
              is to improve the character's believability to emotionally engage players and enhance their 
              engagement with the game as a whole.
            </p>

            <p className='block px-5'>
              I am creating EMgine so that game designers retain maximal control over their characters' 
              in-game behaviours. This means that game designers decide when, how, and which elements of EMgine 
              to use. To this end, I am applying my software design skills and a rigorous design process to 
              ensure that the decisions driving EMgine's development are well informed, documented, and easy for 
              others to understand. You can check out the progress on EMgine's development 
              on <a className="is-link has-text-weight-medium"
                    href="https://github.com/GenevaS/EMgine"
                    target="_blank" rel="noopener noreferrer" aria-label="Go to the EMgine GitHub">GitHub</a>.
            </p>

            <p className='block px-5'>
              In pursuit of believable game characters "with emotion", I have also developed 
              a <a className='is-link'
                   href='https://en.wikipedia.org/wiki/Video_game_modding'
                   target="_blank" rel="noopener noreferrer">mod(ification)</a> for 
              the popular game, <i><a className='is-link'
                                      href='https://elderscrolls.bethesda.net/en/skyrim'
                                      target="_blank" rel="noopener noreferrer">The Elder Scrolls V: Skyrim</a></i>
              . For this mod (named <a className='is-link'
                                       href='https://half-life.fandom.com/wiki/GLaDOS'
                                       target="_blank" rel="noopener noreferrer">GLaDOS after the character from <i>Portal</i></a>)
              , I designed and ran a user study to get a preliminary evaluation of character believability
              and player interest. It was encouraging to know that my participants are eager to see where 
              this work can take games!
            </p>

          </div>

        </section>
      </section>
    </Layout>
  )
}
