import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

export default function Home( ) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
          <div className='columns is-hidden-touch pt-6 px-6'>
            <div className='column is-centered'>
              <div className='columns level'>

                <div className='column' aria-hidden='true'>

                </div>

                <section className='column level-left is-narrow has-text-right'>
                  <div className='image'>
                    <Image
                      priority
                      src="/images/smith_headshot.jpg"
                      height={200}
                      width={200}
                      className="is-rounded is-square"
                      alt="Picture of Geneva M. Smith"
                    />
                  </div>
                </section>

                <section className='column level-right content is-6 has-text-left pr-3'>
                    <p className='title'>Hi!</p>

                    <p className='subtitle'>I&#39;m Geneva, a Ph.D. candidate in the
                    <a href="https://www.eng.mcmaster.ca/cas"> Department of Computing and
                    Software at McMaster University</a>.</p>
                </section>

                <div className='column' aria-hidden='true'>

                </div>

              </div>
            </div>
          </div>

        <div className='columns is-hidden-desktop is-centered pt-6 px-6'>
          <div className='column'>
            <section className='image has-text-centered'>
              <Image
                priority
                src="/images/smith_headshot.jpg"
                height={200}
                width={200}
                className="is-rounded is-square"
                alt="Picture of Geneva M. Smith"
              />
            </section>
          </div>
        </div>

        <div className='columns is-hidden-desktop pt-6 px-6'>
          <section className='column content is-centered has-text-centered'>
              <p className='title'>Hi!</p>

              <p className='subtitle'>I&#39;m Geneva, a Ph.D. candidate in the
              <a href="https://www.eng.mcmaster.ca/cas"> Department of Computing and
              Software at McMaster University</a>.</p>
          </section>
        </div>

        <div className='columns'>
          <div className='column'>
            <section className='content px-6'>
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
            </section>
          </div>
        </div>

      </section>
    </Layout>
  )
}
