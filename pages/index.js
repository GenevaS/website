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
        <div className='columns is-vcentered'>
          <div className='column'>
            <Image
              priority
              src="/images/smith_headshot.jpg"
              height={200}
              width={200}
              className={utilStyles.borderCircle}
              alt="Picture of Geneva M. Smith"
            />
          </div>

          <div className='column'>
            <h1 className='title'>Hi!</h1>

            <h2 className='subtitle'>I&#39;m Geneva, a Ph.D. candidate in the
            <a href="https://www.eng.mcmaster.ca/cas"> Department of Computing and
            Software at McMaster University</a>.</h2>
          </div>
        </div>



        <p>I am interested in the research behind and design of software
          systems (although I have been known to be interested in other
          things too). I am especially interested in
          <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"> Human-Computer Interactions (HCI)</a>
          , where I can help bridge the worlds of the people who design systems
          and the people who use them.
        </p>
        <p>
        Here are some credentials that qualify me as a cross-world ambassador:
        <p>
          Ph.D. in Software Engineering
          <br></br><i>McMaster University</i>, September 2017-Present
         <li>Some info on that</li>
        </p>
        <p>
          M.A.Sc. in Software Engineering
          <br></br><i>McMaster University</i>, 2014-2017
         <li>Some info on that</li>
        </p>
        </p>
      </section>
    </Layout>
  )
}
