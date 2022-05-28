import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'

import googlescholaricon from '../node_modules/academicons/svg/google-scholar-square.svg'
import orcidicon from '../node_modules/academicons/svg/orcid-square.svg'

const academicProfileLinks = (
  <div className='is-flex is-flex-direction-row is-justify-content-space-between'>
      <a className="icon" href='https://scholar.google.com/citations?user=4CobK4kAAAAJ&hl=en'>
        <Image priority
               src={googlescholaricon}
               alt="Go to Google Scholar Profile"/>
      </a>
      <div className='px-1'></div>
      <a className="icon" href='https://orcid.org/0000-0002-6015-2589'>
        <Image priority
               src={orcidicon}
               alt="Go to Orcid Profile"/>
      </a>
  </div>
);

export default function Publications( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className='is-full-width pt-6'>

          <div className='columns px-6'>
            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <InfoTile tileTitle="Publications & Preprints (4 of 6)"
                              tileLink={academicProfileLinks}
                              pictureSrc={null}>
                        <div className='content'>
                          <p>
                            <span className='is-highlighted'>Geneva M. Smith</span> and Jacques Carette. 2022.
                            What Lies Beneath—A Survey of Affective Theory Use in Computational Models of Emotion.
                            Submitted December 8, 2021 to the <i>IEEE Transactions on Affective Computing</i>. Available
                            at <a className='is-link' href="https://doi.org/10.36227/techrxiv.18779315" style={{wordBreak: "break-all"}} aria-label="Go to official page for What Lies Beneath">https://doi.org/10.36227/techrxiv.18779315</a>
                          </p>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span> and Jacques Carette. 2020.
                            Design Foundations for Emotional Game Characters. <i>Eludamos: Journal for Computer
                            Game Culture</i> 10, 1 (Apr. 2020), 109—140. <a className='is-link' href="https://www.eludamos.org/index.php/eludamos/article/view/vol10no1-8/10-1-8" style={{wordBreak: "break-all"}} aria-label="Go to official page for Design Foundations for Emotional Game Characters">https://www.eludamos.org/index.php/eludamos/article/view/vol10no1-8/10-1-8</a>
                          </p>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span>. 2017.
                            <i> GLaDOS: Integrating Emotion-Based Behaviours into Non-Player Characters in Computer
                            Role-Playing Games.</i> Masters Thesis. Department of Computing and Software,
                            McMaster University, Hamilton, ON, Canada. Advisor <a className='is-link' href="https://www.eng.mcmaster.ca/cas/people/faculty/jacques-carette" aria-label="Go to Jacque Carette's website">Jacques Carette</a>
                            . <a className='is-link' href='http://hdl.handle.net/11375/21369' style={{wordBreak: "break-all"}} aria-label="Go to official page for GLaDOS: Integrating Emotion-Based Behaviours into Non-Player Characters in Computer
                            Role-Playing Games">http://hdl.handle.net/11375/21369</a>
                          </p>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span>, Robert J. Teather, Jordan Lass, Jacques Carette. 2015.
                            Effects of Interior Bezel Size and Configuration on Gaming Performance with Large Tiled Displays. In
                            <i> Proceedings of the 2015 IEEE Games Entertainment Media Conference (GEM 2015)</i>. October 14—16, 2015, Toronto, ON, Canada.
                            IEEE, New York, NY, USA, 8 pages. <a className='is-link' href='https://doi.org/10.1109/GEM.2015.7377209' style={{wordBreak: "break-all"}} aria-label="Go to official page for Effects of Interior Bezel Size and Configuration on Gaming Performance with Large Tiled Displays">https://doi.org/10.1109/GEM.2015.7377209</a>
                          </p>
                        </div>
                      </InfoTile>

                      <InfoTile tileTitle="Academic Presentations & Panels"
                              pictureSrc={null}
                              lighter>
                        <div className='content'>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span>. 2019. Towards Emotional
                            Game Characters. In Melody Devries (Chair) <i>Confronting Ecologies of Emotion:
                            Design, Implementation, and the [Social] User Experience</i>. Panel presented at
                            the <i>20th Annual Convention of the Media Ecology Association (MEA)</i>. June
                            27–30, 2019, Toronto, ON, Canada.
                          </p>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span>. 2017. GLaDOS:
                            Integrating Emotion-Based Behaviours into Non-Player Characters in
                            Computer Role-Playing Games. Presentation at the <i>2017 IMMERSe
                            Network Meeting</i>. June 7–9, 2017, Ottawa, ON, Canada.
                          </p>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span>. 2015. Ordinary
                            People: Integrating Emotional Reactions into Non-Player Characters in
                            Computer Role Playing Games. Presentation at the <i>2015 IMMERSe
                            Network Meeting</i>. November 26–27, 2015, Waterloo, ON, Canada.
                          </p>
                        </div>
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
