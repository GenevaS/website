/* ---------------------------------------------------------------
 * HOME/ABOUT ME PAGE (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'

const profilePicture = <Image
                          priority
                          src="/images/smith_headshot.jpg"
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
              I am interested in the <span className='has-text-weight-medium'>research
              behind and design of software systems</span> (although I have been known
              to be interested in other things too). I am especially interested
              in <a className="is-link has-text-weight-medium"
                    href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"
                    target="_blank" rel="noopener noreferrer">Human-Computer Interactions (HCI)</a>
              , where I can help bridge the worlds of the people who design systems
              and the people who use them.
            </p>

            <p className='block px-5'>
              Right now, <span className='has-text-weight-medium'>I am designing an engine that will
              evaluate what emotion a computer-controlled character (Non-Player Character) should
              experience given the current game state</span>. The aim is to
              elevate the <span className='has-text-weight-medium'>player engagement</span>.
            </p>

            <p className='block px-5'>
              The engine must be as flexible as possible so that game designers and developers have maximal control
              over how they use it. To this end, I am applying my software design skills to a rigorous design process
              to ensure that decisions
              are <span className='has-text-weight-medium'>well informed, documented, and easy for others to understand</span>.
            </p>

            <p className='block px-5'>
              In pursuit of this emotion engine, I have
              also <span className='has-text-weight-medium'>designed and run user studies</span>,
              and <span className='has-text-weight-medium'>developed a mod</span> for the popular
              game, <a className='is-link'
                       href='https://elderscrolls.bethesda.net/en/skyrim'
                       target="_blank" rel="noopener noreferrer">Skyrim</a>.
            </p>

          </div>
        </section>
      </section>
    </Layout>
  )
}
