import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import googlescholaricon from '../node_modules/academicons/svg/google-scholar-square.svg'
import orcidicon from '../node_modules/academicons/svg/orcid-square.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const githubicon = <FontAwesomeIcon className='has-text-black' icon={faGithubSquare} transform='grow-13' alt="GitHub Icon"/>

export default function Publications( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className='pt-6'>
          <div className='columns is-flex is-flex-direction-column px-6'>
            <div className='column'>
              <div className="card">
                <header className="card-header">
                  <h1 className="card-header-title">
                    Publications and Preprints (4 of 5)
                  </h1>
                  <div className="pt-3 pr-1" aria-label="Link to Google Scholar Profile">
                    <a className="icon" href='https://scholar.google.com/citations?user=4CobK4kAAAAJ&hl=en'>
                      <Image
                        priority
                        src={googlescholaricon}
                        alt="Google Scholar Icon"/>
                    </a>
                   </div>
                    <div className="pt-3 pr-3" aria-label="Link to Orcid Profile">
                    <a className="icon" href='https://orcid.org/0000-0002-6015-2589'>
                      <Image
                        priority
                        src={orcidicon}
                        alt="Orcid Icon"/>
                    </a>
                  </div>
                </header>

                <div className="card-content">
                  <div className="content">
                    <p>
                      <span className='has-background-primary-light'>Geneva M. Smith</span> and Jacques Carette. 2022.
                      What Lies Beneath—A Survey of Affective Theory Use in Computational Models of Emotion.
                      Submitted December 8, 2021 to the <i>IEEE Transactions on Affective Computing</i>. Available
                      at <a href="https://doi.org/10.36227/techrxiv.18779315">https://doi.org/10.36227/techrxiv.18779315</a>
                    </p>

                    <p>
                      <span className='has-background-primary-light'>Geneva Smith</span> and Jacques Carette. 2020.
                      Design Foundations for Emotional Game Characters. <i>Eludamos: Journal for Computer
                      Game Culture</i> 10, 1 (Apr. 2020), 109—140. <a href="https://www.eludamos.org/index.php/eludamos/article/view/vol10no1-8/10-1-8">https://www.eludamos.org/index.php/eludamos/article/view/vol10no1-8/10-1-8</a>
                    </p>

                    <p>
                    <span className='has-background-primary-light'>Geneva Smith</span>. 2017.
                      <i> GLaDOS: Integrating Emotion-Based Behaviours into Non-Player Characters in Computer
                      Role-Playing Games.</i> Masters Thesis. Department of Computing and Software,
                      McMaster University, Hamilton, ON, Canada. Advisor <a href="https://www.eng.mcmaster.ca/cas/people/faculty/jacques-carette">Jacques Carette</a>
                      . <a href='http://hdl.handle.net/11375/21369'>http://hdl.handle.net/11375/21369</a>
                    </p>

                    <p>
                      <span className='has-background-primary-light'>Geneva Smith</span>, Robert J. Teather, Jordan Lass, Jacques Carette. 2015.
                      Effects of Interior Bezel Size and Configuration on Gaming Performance with Large Tiled Displays. In
                      <i> Proceedings of the 2015 IEEE Games Entertainment Media Conference (GEM 2015)</i>. October 14—16, 2015, Toronto, ON, Canada.
                      IEEE, New York, NY, USA, 8 pages. <a href='https://doi.org/10.1109/GEM.2015.7377209'>https://doi.org/10.1109/GEM.2015.7377209</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='column'>
            <div className="card">
                <header className="card-header">
                  <h1 className="card-header-title">
                    Technical and Visual Design Projects
                  </h1>
                  <div className="pt-3 pr-3" aria-label="Link to GitHub">
                    <a className="" href="https://github.com/GenevaS">
                      {githubicon}
                    </a>
                  </div>
                </header>

                <div className="card-content">
                  <div className="content">
                    <p> Hello
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
      </Layout>
    )
}
