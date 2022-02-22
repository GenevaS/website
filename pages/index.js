import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Layout, { siteTitle } from '../components/layout'

export default function Home( ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <NavBar></NavBar>

      <section>
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

      <Footer></Footer>
    </Layout>
  )
}
