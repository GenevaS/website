/* ---------------------------------------------------------------
 * AWARDS (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faImage, faFilePdf } from '@fortawesome/free-solid-svg-icons'

const youtubeicon = <FontAwesomeIcon className='has-text-black' icon={faYoutubeSquare} transform='grow-13' alt="YouTube Icon"/>
const imageicon = <FontAwesomeIcon className='has-text-black' icon={faImage} transform='grow-7' alt="Image Icon"/>
const pdficon = <FontAwesomeIcon className='has-text-black' icon={faFilePdf} transform='grow-7' alt="{PDF} Icon"/>

const posterdownload = <a className='icon' download href="images/GSmith_CASPoster_2022.jpg" tabIndex={0}>
                        {imageicon}
                       </a>
const gradflixLink = <a className='icon' href="https://youtu.be/VHo-bTDCiXs?t=722" aria-label="Go see my GradFlix video on YouTube">
                        {youtubeicon}
                     </a>
const slidedownload = <a className='icon' download href="3MT_GLaDOS_16-9.pdf" tabIndex={0}>
                        {pdficon}
                      </a>

export default function Awards( ) {
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
                    Competition Awards
                  </h1>
                </header>
              </div>
            </div>

            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">

                        <InfoTile tileTitle={
                            <p className='has-text-weight-medium px-3'>
                                Second Place in McMaster University&#39;s Department of Computing and Software Annual Poster Session
                                <br></br>
                                <i>April 2022</i>
                            </p>
                            }
                            tileLink={posterdownload}
                            pictureSrc={null}
                            lighter>
                        <p>
                          I was awarded <span className='has-text-weight-medium'>first place for aesthetic poster design</span>,
                          and <span className='has-text-weight-medium'>tied for second place in the People&#39;s Choice</span> with
                          my coworker <a className='is-link' href='https://www.cas.mcmaster.ca/~sorainsm/'>Sasha Soraine</a>.
                          Overall, I won <span className='has-text-weight-medium'>second place</span>.
                        </p>
                        <p>
                          This is a poster competition for graduate students in the <a className="is-link" href="https://www.eng.mcmaster.ca/cas">Department
                          of Computing and Software</a> to get experience
                          with <span className='has-text-weight-medium'>academic poster design and presentation</span>.
                        </p>
                        <p>
                          I enjoyed the challenge of squeezing years of research into a small and visually appealing product. It
                          also let me have some <span className='has-text-weight-medium'>Photoshop</span> fun!
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                            <p className='has-text-weight-medium px-3'>
                                McMaster University Dean&#39;s Award for Excellence in Communicating Graduate Research
                                <br></br>
                                <i>April 2022</i>
                            </p>
                            }
                            tileLink={gradflixLink}
                            pictureSrc={null}
                            lighter>
                        <p>
                          I was honoured with this award
                          for <a className='is-link has-text-weight-medium' href='https://gs.mcmaster.ca/current-students/resources/gradflix-final-showcase-2022/#tab-content-winners'>placing Third
                          and by being voted the People&#39;s Choice</a> in <span className='has-text-weight-medium'>McMaster&#39;s
                          Second Annual GradFlix competitiion</span>!
                        </p>
                        <p>
                          This <a className="is-link" href='https://gs.mcmaster.ca/current-students/resources/gradflix-video-competition/'>graduate student video competition</a> was
                          for <span className='has-text-weight-medium'>explaning my research to a non-technical audience</span>.
                          In <span className='has-text-weight-medium'>one minute or less</span>. That&#39;s not a lot of time
                          to cover several years of work! Fortunately, I could get creative and pair what I was saying to
                          something visual and active.
                        </p>
                        <p>
                          With <span className='has-text-weight-medium'>a camera, some friends, Audacity, Adobe Premiere, and Adobe After
                          Effects</span>, I brought my stick figure <span className='has-text-weight-medium'>storyboard</span> to life.
                          You can watch it on
                          the <a className='is-link' href='https://youtu.be/VHo-bTDCiXs?t=722'>McMaster School of Graduate Studies YouTube channel</a>.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                            <p className='has-text-weight-medium px-3'>
                                Third Place in McMaster University&#39;s Department of Computing and Software Three Minute Thesis (3MT)
                                <br></br>
                                <i>June 2018</i>
                            </p>
                            }
                                tileLink={slidedownload}
                                pictureSrc={null}
                                lighter>
                        <p>
                            I
                            had <a className="is-link has-text-weight-medium" href='https://gs.mcmaster.ca/current-students/resources/three-minute-thesis/'>three
                            minutes and one static slide</a> to convey my Ph.D. research. I had to communicate
                            the problem and what I was doing about it to a panel of judges that were not familiar
                            with my work or field. Needless to say, it was a challenge (and public speaking is
                            one of my least favourite things to do).
                        </p>
                        <p>
                          I did it though, and am quite pleased with how I did. People were surprised that I could speak that
                          loudly. That must have <span className='has-text-weight-medium'>helped capture the attention of another
                          student who came to work in our lab the following summer</span>. They claim that it was my 3MT that
                          interested them in it, and I can&#39;t think of a higher form of praise.
                        </p>
                        <p>
                            Since the focus is on <i>what</i> I wanted to say, I kept it simple and designed the slide
                            in <span className='has-text-weight-medium'>PowerPoint</span>.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                            <p className='has-text-weight-medium px-3'>
                                Third Place in the IBM Canada Markham Lab TechChallenge
                                <br></br>
                                <i>April 2013</i>
                            </p>
                            }
                                pictureSrc={null}
                                lighter>
                        <p>
                            This was a fun, three-week design challenge. In teams of five, we designed
                            a <span className='has-text-weight-medium'>user experience and interface for
                            a game targeted at high school students</span> by
                            creating <span className='has-text-weight-medium'>personas</span> and <span className='has-text-weight-medium'>paper
                            prototypes</span>.
                        </p>
                      </InfoTile>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='column'>
              <div className="card">
                <header className="card-header is-align-items-center">
                  <h1 className="card-header-title">
                    Academic Achievements
                  </h1>
                </header>
              </div>
            </div>

            <div className='column'>
                        <div className='tile is-child notification
                                        has-background-primary-light has-dark-grey-border
                                        px-3'>
                            <article className="is-flex is-flex-direction-column
                                                is-flex-grow-1
                                                is-align-items-center px-3">
                                <div className='content'>

                                    <p>
                                        <a className='is-link' href='https://gs.mcmaster.ca/current-students/scholarships/ontario-graduate-scholarship-and-the-queen-elizabeth-ii-graduate-scholarship-in-science-and-technology/'>Ontario Graduate Scholarship (OGS)</a> 2020/2021
                                        <ul>
                                            <li>A merit-based scholarship for students with an average of A- or higher</li>
                                        </ul>
                                    </p>

                                    <p>
                                        McMaster University Dean&#39;s Honour List
                                        <br></br>
                                        <i>2010, 2011, 2013</i>
                                        <ul>
                                            <li>Awarded to students that achieve a minimum of 9.5 / 12.0 GPA in 30 course units
                                                (approx. 10 courses)
                                            </li>
                                            <li>I was away on co-op for the 2012 academic year</li>
                                        </ul>
                                    </p>

                                    <p>
                                        Golden Key International Honour Society Member
                                        <br></br>
                                        <i>2012</i>
                                        <ul>
                                            <li>
                                              Awarded for being in the <span className='has-text-weight-medium'>top 15%
                                              of the class</span> at McMaster University
                                            </li>
                                        </ul>
                                    </p>

                                </div>
                            </article>
                        </div>
                    </div>
          </div>
        </section>
      </Layout>
    )
}
