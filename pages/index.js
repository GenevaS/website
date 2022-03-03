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
      the <a className="is-link" href="https://www.eng.mcmaster.ca/cas">Department of Computing and
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
              I am interested in the research behind and design of software
              systems (although I have been known to be interested in other
              things too). I am especially interested
              in <a className="is-link" href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction">Human-Computer Interactions (HCI)</a>
              , where I can help bridge the worlds of the people who design systems
              and the people who use them.
            </p>

            <p className='block px-5'>
              Here are some academic credentials that qualify me as a cross-world ambassador:
            </p>

            <div className="tile is-ancestor px-5">
              <div className="tile is-vertical">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <InfoTile tileTitle={<p className='has-text-weight-medium px-3'>
                                            Ph.D. in Software Engineering
                                            <br></br>
                                            <i>McMaster University</i>, 2017 to Present
                                          </p>}
                              pictureSrc={null}
                              pictureAlt="">
                      <p className='content'>
                        <ul className='mt-0'>
                          <li>
                            Researching and designing a software architecture for improving the believability
                            of non-player characters (NPCs), which builds on my M.A.Sc. work
                          </li>
                          <li>
                            Focusing on a rigorous design process to ensure that design decisions are well
                            informed, documented, and easy for others to understand
                          </li>
                          <li>
                            Awarded a
                            2020—2021 <a className='is-link' href='https://gs.mcmaster.ca/current-students/scholarships/ontario-graduate-scholarship-and-the-queen-elizabeth-ii-graduate-scholarship-in-science-and-technology/'>Ontario Graduate Scholarship (OGS)</a>,
                            a merit-based scholarship for students with an average of A- or higher
                          </li>
                        </ul>
                      </p>
                    </InfoTile>

                    <InfoTile tileTitle={<p className='has-text-weight-medium px-3'>
                                            M.A.Sc. in Software Engineering
                                            <br></br>
                                            <i>McMaster University</i>, 2014 to 2017
                                          </p>}
                              pictureSrc={null}
                              pictureAlt="">
                      <p className='content'>
                        <ul className='mt-0'>
                          <li>
                            Researched and designed a software architecture for improving the believability
                            of non-player characters (NPCs) in
                            Bethesda&#39;s <a className="is-link" href="https://elderscrolls.bethesda.net/en/skyrim">The Elder
                            Scrolls V: Skyrim</a>
                          </li>
                          <li>
                            Implemented the architecture as a Skyrim mod, using
                            Bethesda&#39;s <a className="is-link" href='https://www.creationkit.com/index.php?title=Main_Page'>Creation Kit</a> and <a className="is-link" href="https://www.creationkit.com/index.php?title=Category:Papyrus">Papyrus</a>,
                            the companion object-oriented scripting language
                          </li>
                          <li>
                            Designed and conducted a user study to collect objective and subjective user data
                            to compare levels of player interest between the new architecture and the original
                            game
                          </li>
                        </ul>
                      </p>
                    </InfoTile>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}
