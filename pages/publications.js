/* ---------------------------------------------------------------
 * PUBLICATIONS AND PRESENTATIONS (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'

import GoogleScholarIcon from '../node_modules/academicons/svg/google-scholar-square.svg'
import OrcidIcon from '../node_modules/academicons/svg/orcid-square.svg'
import DBLPIcon from '../node_modules/academicons/svg/dblp-square.svg'
import ResearchGateIcon from '../node_modules/academicons/svg/researchgate-square.svg'

const academicProfileLinks = (
  <div className='is-flex is-flex-direction-row is-justify-content-space-between px-3'>
      <a className="icon"
         href='https://orcid.org/0000-0002-6015-2589'
         target="_blank" rel="noopener noreferrer">
        <OrcidIcon />
      </a>
      <span className='px-1'></span>
      <a className="icon"
         href='https://dblp.org/pid/165/9646.html'
         target="_blank" rel="noopener noreferrer">
        <DBLPIcon />
      </a>
      <span className='px-1'></span>
      <a className="icon"
         href='https://www.researchgate.net/profile/Geneva-Smith-4'
         target="_blank" rel="noopener noreferrer">
        <ResearchGateIcon />
      </a>
      <span className='px-1'></span>
      <a className="icon"
         href='https://scholar.google.com/citations?user=4CobK4kAAAAJ&hl=en'
         target="_blank" rel="noopener noreferrer">
        <GoogleScholarIcon />
      </a>
      <div className='ml-1'></div>
  </div>
);

export default function Publications( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className='is-full-width pt-6'>

          <div className='columns is-flex-direction-column px-6'>

            <div className='column'>
              <div className="card">
                <header className="card-header is-align-items-center">
                  <h1 className="card-header-title">
                    Publications & Presentations
                  </h1>

                  {academicProfileLinks}
                </header>
              </div>
            </div>

            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">

                      <InfoTile tileTitle="Refereed Journal Papers"
                              pictureSrc={null}
                              lighter>
                        <div className='content'>

                          <p>
                            <span className='is-highlighted'>Geneva M. Smith</span> and Jacques Carette. 2022.
                            What Lies Beneath—A Survey of Affective Theory Use in Computational Models of 
                            Emotion. <i>IEEE Transactions on Affective Computing</i> 13, 4 (Oct.–Dec. 2022), 
                            1793–1812. <a className='is-link'
                                  href="https://doi.org/10.1109/TAFFC.2022.3197456"
                                  target="_blank" rel="noopener noreferrer"
                                  style={{wordBreak: "break-all"}} aria-label="Go to official page for What Lies Beneath">https://doi.org/10.1109/TAFFC.2022.3197456</a>
                          </p>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span> and Jacques Carette. 2019.
                            Design Foundations for Emotional Game Characters. <i>Eludamos: Journal for Computer
                            Game Culture</i> 10, 1 (2019), 109–140. <a className='is-link'
                                                                            href="https://doi.org/10.7557/23.6175"
                                                                            target="_blank" rel="noopener noreferrer"
                                                                            style={{wordBreak: "break-all"}} aria-label="Go to official page for Design Foundations for Emotional Game Characters">https://doi.org/10.7557/23.6175</a>
                          </p>

                        </div>
                      </InfoTile>

                      <InfoTile tileTitle="Refereed Conference Papers"
                              pictureSrc={null}
                              lighter>
                        <div className='content'>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span>, Robert J. Teather, Jordan Lass, Jacques Carette. 2015.
                            Effects of Interior Bezel Size and Configuration on Gaming Performance with Large Tiled Displays. In
                            <i> Proceedings of the 2015 IEEE Games Entertainment Media Conference (GEM 2015)</i>. October 14–16, 2015, Toronto, ON, Canada.
                            IEEE, New York, NY, USA, 130–137 (8 pages). <a className='is-link'
                                                                 href='https://doi.org/10.1109/GEM.2015.7377209'
                                                                 target="_blank" rel="noopener noreferrer"
                                                                 style={{wordBreak: "break-all"}} aria-label="Go to official page for Effects of Interior Bezel Size and Configuration on Gaming Performance with Large Tiled Displays">https://doi.org/10.1109/GEM.2015.7377209</a>
                          </p>

                        </div>
                      </InfoTile>

                      <InfoTile tileTitle="Preprints"
                              pictureSrc={null}
                              lighter>
                        <div className='content'>

                          <p>
                            <span className='is-highlighted'>Geneva M. Smith</span> and Jacques Carette. 2023.
                            Start Your EMgine—A Methodology for Choosing Emotion Theories for Computational Models 
                            of Emotion. Revision submitted May 26, 2023 to <i>Entertainment Computing</i>. Available
                            at <a className='is-link'
                                  href="https://doi.org/10.2139/ssrn.4327741"
                                  target="_blank" rel="noopener noreferrer"
                                  style={{wordBreak: "break-all"}} aria-label="Go to official page for Start Your EMgine">https://doi.org/10.2139/ssrn.4327741</a>
                          </p>

                        </div>
                      </InfoTile>

                      <InfoTile tileTitle="Panel Presentations"
                              pictureSrc={null}
                              lighter>
                        <div className='content'>

                          <p>
                            <span className='is-highlighted'>Geneva M. Smith</span>. 2023. "Creating 
                            Believable Stories with NPCs". In <i>Conversations with Games:  Emergent Narratives 
                            and Gameplay Experience</i>. Panel presented at the <i>2023 International
                            Conference on Games and Narrative (ICGaN)</i>. May 15–19, 2023, Online.
                          </p>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span>. 2019. "Towards Emotional
                            Game Characters". In Melody Devries (Chair) <i>Confronting Ecologies of Emotion:
                            Design, Implementation, and the [Social] User Experience</i>. Panel presented at
                            the <i>20th Annual Convention of the Media Ecology Association (MEA)</i>. June
                            27–30, 2019, Toronto, ON, Canada.
                          </p>

                        </div>
                      </InfoTile>

                      <InfoTile tileTitle="Research Talks"
                              pictureSrc={null}
                              lighter>
                        <div className='content'>

                        <p>
                            <span className='is-highlighted'>Geneva M. Smith</span> and Jacques Carette. 2023.
                            "Building Test Cases for Video Game-Focused Computational Models of Emotion". Presented 
                            at the <i>Interdisciplinary Design of Emotion Sensitive Agents (IDEA) International 
                              Workshop</i>. May 30, 2023. Held in conjunction with the 22nd International Conference 
                              on Autonomous Agents and Multiagent Systems (AAMAS 2023), May 29–June 2, 2023, London, 
                              England. <a className='is-link'
                                  href="https://en.uit.no/project/idea/accepted_papers"
                                  target="_blank" rel="noopener noreferrer"
                                  style={{wordBreak: "break-all"}} 
                                  aria-label="Go to IDEA Workshop Page for Accepted Papers">https://en.uit.no/project/idea/accepted_papers</a>
                          </p>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span>. 2017. "GLaDOS:
                            Integrating Emotion-Based Behaviours into Non-Player Characters in
                            Computer Role-Playing Games". Presented at the <i>2017 IMMERSe
                            Network Meeting</i>. June 7–9, 2017, Ottawa, ON, Canada.
                          </p>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span>. 2015. "Ordinary
                            People: Integrating Emotional Reactions into Non-Player Characters in
                            Computer Role Playing Games". Presented at the <i>2015 IMMERSe
                            Network Meeting</i>. November 26–27, 2015, Waterloo, ON, Canada.
                          </p>
                        </div>
                      </InfoTile>

                      <InfoTile tileTitle="Technical Talks"
                              pictureSrc={null}
                              lighter>
                        <div className='content'>

                          <p>
                            <span className='is-highlighted'>Geneva Smith</span>. 2019. "Problems That 
                            You've Solved in Video Games: The Agent Assignment Problem". Presented in
                            the LiCS Talk Series at McMaster University. July 19, 2019, Hamilton, ON, 
                            Canada.
                          </p>
                        </div>
                      </InfoTile>

                      <InfoTile tileTitle="Theses"
                              pictureSrc={null}
                              lighter>
                        <div className='content'>

                          <p>
                            <span className='is-highlighted'>Geneva M. Smith</span>. 2023. 
                            <i> Start Your EM(otion En)gine: Towards Computational Models of Emotion for Improving 
                            the Believability of Video Game Non-Player Characters</i>. Ph.D. Thesis. Department of Computing and Software,
                            McMaster University, Hamilton, ON, Canada. Advisor <a className='is-link'
                                                                                  href="https://www.eng.mcmaster.ca/faculty/jacques-carette/"
                                                                                  target="_blank" rel="noopener noreferrer"
                                                                                  aria-label="Go to Dr. Jacque Carette's profile on McMaster University's website">Dr. Jacques Carette</a>
                            . <a className='is-link'
                                 href='http://hdl.handle.net/11375/28699'
                                 target="_blank" rel="noopener noreferrer"
                                 style={{wordBreak: "break-all"}} aria-label="Go to official page for Start Your EM(otion En)gine">http://hdl.handle.net/11375/28699</a>
                          </p>

                          <p>
                            <span className='is-highlighted'>Geneva M. Smith</span>. 2017.
                            <i> GLaDOS: Integrating Emotion-Based Behaviours into Non-Player Characters in Computer
                            Role-Playing Games</i>. Masters Thesis. Department of Computing and Software,
                            McMaster University, Hamilton, ON, Canada. Advisor <a className='is-link'
                                                                                  href="https://www.eng.mcmaster.ca/faculty/jacques-carette/"
                                                                                  target="_blank" rel="noopener noreferrer"
                                                                                  aria-label="Go to Dr. Jacque Carette's profile on McMaster University's website">Dr. Jacques Carette</a>
                            . <a className='is-link'
                                 href='http://hdl.handle.net/11375/21369'
                                 target="_blank" rel="noopener noreferrer"
                                 style={{wordBreak: "break-all"}} aria-label="Go to official page for GLaDOS: Integrating Emotion-Based Behaviours into Non-Player Characters in Computer
                            Role-Playing Games">http://hdl.handle.net/11375/21369</a>
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
