import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home( ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
          <div className='columns is-hidden-touch pt-6 px-6'>
            <div className='column is-centered'>
              <div className='columns level'>
                <div className='column' aria-hidden='true'>

                </div>
                <div className='column level-left is-narrow has-text-right'>
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
                </div>

                <div className='column level-right is-6 has-text-left pr-3'>
                  <div className='content'>
                    <p className='title'>Hi!</p>
                  </div>
                  <div className='content'>
                    <p className='subtitle'>I&#39;m Geneva, a Ph.D. candidate in the
                    <a href="https://www.eng.mcmaster.ca/cas"> Department of Computing and
                    Software at McMaster University</a>.</p>
                  </div>
                </div>
                <div className='column' aria-hidden='true'>

                </div>
              </div>
            </div>
          </div>

        <div className='columns is-hidden-desktop is-centered pt-6 px-6'>
          <div className='column'>
            <div className='image has-text-centered'>
              <Image
                priority
                src="/images/smith_headshot.jpg"
                height={200}
                width={200}
                className="is-rounded is-square"
                alt="Picture of Geneva M. Smith"
              />
            </div>
          </div>
        </div>

        <div className='columns is-hidden-desktop pt-6 px-6'>
          <div className='column is-centered has-text-centered'>
            <div className='content'>
              <p className='title'>Hi!</p>
            </div>
            <div className='content'>
              <p className='subtitle'>I&#39;m Geneva, a Ph.D. candidate in the
              <a href="https://www.eng.mcmaster.ca/cas"> Department of Computing and
              Software at McMaster University</a>.</p>
            </div>
          </div>
        </div>

        <div className='columns'>
          <div className='column'>
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

                <p className='block'>
                  Ph.D. in Software Engineering
                  <br></br><i>McMaster University</i>, September 2017-Present
                  <li>Some info on that</li>
                </p>

                <p className='block'>
                  M.A.Sc. in Software Engineering
                  <br></br><i>McMaster University</i>, 2014-2017
                  <li>Some info on that</li>
                </p>
              </p>
            </div>
          </div>
        </div>

      </section>
    </Layout>
  )
}
