/* ---------------------------------------------------------------
 * HOME/ABOUT ME PAGE (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

const profilePicture = <Image
                          priority
                          src="/images/smith_headshot.jpg"
                          height={200}
                          width={200}
                          className="is-rounded is-square"
                          alt="Picture of Geneva M. Smith"
                        />;

const quickIntro = (
  <div>
    <p className='title'>Hi!</p>

    <p className='subtitle'>I&#39;m Geneva, a Ph.D. candidate in the
    <a href="https://www.eng.mcmaster.ca/cas"> Department of Computing and
    Software at McMaster University</a>.</p>

  </div>
);

const aboutMeContent = (
  <div className='content px-6'>
    <p className='content block'>
      I am interested in the research behind and design of software
      systems (although I have been known to be interested in other
      things too). I am especially interested in
      <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"> Human-Computer Interactions (HCI)</a>
      , where I can help bridge the worlds of the people who design systems
      and the people who use them.
    </p>

    <p className='block'>
      Here are some academic credentials that qualify me as a cross-world ambassador:
    </p>

    <div className='card m-2'>
      <header className='card-header'>
        <p className='has-text-weight-medium p-3'>
          Ph.D. in Software Engineering
          <br></br>
          <i>McMaster University</i>, September 2017 to Present
        </p>
      </header>
      <div className='card-content'>
        <li>Some info on that</li>
      </div>
    </div>

    <div className='card m-2'>
      <header className='card-header'>
        <p className='has-text-weight-medium p-3'>
          M.A.Sc. in Software Engineering
          <br></br>
          <i>McMaster University</i>, 2014 to 2017
        </p>
      </header>
      <div className='card-content'>
        <li>Some info on that</li>
      </div>
    </div>
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
          <div className='column'>
            {aboutMeContent}
          </div>
        </section>

      </section>
    </Layout>
  )
}
