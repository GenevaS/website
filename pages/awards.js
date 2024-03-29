/* ---------------------------------------------------------------
 * AWARDS (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faImage, faFilePdf } from '@fortawesome/free-solid-svg-icons'

const youtubeicon = <FontAwesomeIcon className='has-text-black' icon={faYoutubeSquare} transform='grow-13' alt="YouTube Icon"/>
const imageicon = <FontAwesomeIcon className='has-text-black' icon={faImage} transform='grow-7' alt="Image Icon"/>
const pdficon = <FontAwesomeIcon className='has-text-black' icon={faFilePdf} transform='grow-7' alt="{PDF} Icon"/>

const posterdownload = <Link href="/images/GSmith_CASPoster_2022.jpg">
                        <a className='icon mx-1' download
                           target="_blank" rel="noopener noreferrer"
                           aria-label="Download a JPEG of my poster" tabIndex={0}>
                            {imageicon}
                        </a>
                       </Link>

const gradflixLink = <a className='icon mx-1' href="https://youtu.be/VHo-bTDCiXs?t=722"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Go see my GradFlix video on YouTube">
                        {youtubeicon}
                     </a>
const slidedownload = <Link href="/assets/3MT_GLaDOS_16-9.pdf">
                        <a className='icon mx-1' download
                           target="_blank" rel="noopener noreferrer"
                           aria-label="Download PDF of my 3MT Slide" tabIndex={0}>
                          {pdficon}
                        </a>
                      </Link>


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
                    Competitions
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
                            <p>
                                <a className='is-link'
                                 href='https://gs.mcmaster.ca/current-students/resources/gradflix-final-showcase-2022/#tab-content-winners'
                                 target="_blank" rel="noopener noreferrer">Third Place and Voted People&#39;s Choice</a> in McMaster&#39;s
                                 Second Annual GradFlix Competition
                                <br className='my-1'></br>
                                <i className='has-text-weight-medium'>April 2022</i>
                            </p>
                            }
                            tileLink={gradflixLink}
                            pictureSrc={null}
                            lighter>
                        <p>
                          This <a className="is-link"
                                  href='https://gs.mcmaster.ca/current-students/resources/gradflix-video-competition/'
                                  target="_blank" rel="noopener noreferrer">graduate student video competition</a> was
                          for explaning my research to a non-technical audience.
                          In one minute or less. That&#39;s not a lot of time
                          to cover several years of work! Fortunately, I could get creative and pair what I was saying to
                          something visual and active.
                        </p>
                        <p>
                          With a camera, some friends, Audacity, Adobe Premiere, and Adobe After
                          Effects, I brought my stick figure storyboard to life.
                          You can watch it on
                          the <a className='is-link'
                                 href='https://youtu.be/VHo-bTDCiXs?t=722'
                                 target="_blank" rel="noopener noreferrer">McMaster School of Graduate Studies YouTube channel</a>.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                              <p>
                                Second Place in McMaster University&#39;s Fourth Graduate Computing and Software Poster & Demo Competition
                                <br className='my-1'></br>
                                <i className='has-text-weight-medium'>April 2022</i>
                              </p>
                            }
                            tileLink={posterdownload}
                            pictureSrc={null}
                            lighter>
                        <p>
                          I was awarded first place for aesthetic poster design,
                          and tied for second place in the People&#39;s Choice with
                          my coworker <a className='is-link'
                                         href='https://www.cas.mcmaster.ca/~sorainsm/'
                                         target="_blank" rel="noopener noreferrer">Sasha Soraine</a>.
                          Overall, I won second place.
                        </p>
                        <p>
                          This is a poster competition for graduate students in the <a className="is-link"
                                                                                       href="https://www.eng.mcmaster.ca/cas"
                                                                                       target="_blank" rel="noopener noreferrer">Department
                          of Computing and Software</a> to get experience
                          with academic poster design and presentation.
                        </p>
                        <p>
                          I enjoyed the challenge of squeezing years of research into a small and visually appealing product. It
                          also let me have some Photoshop fun!
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                            <p>
                                Third Place in McMaster University&#39;s Department of Computing and Software Three Minute Thesis (3MT)
                                <br className='my-1'></br>
                                <i className='has-text-weight-medium'>June 2018</i>
                            </p>
                            }
                                tileLink={slidedownload}
                                pictureSrc={null}
                                lighter>
                        <p>
                            I
                            had <a className="is-link"
                                 href='https://gs.mcmaster.ca/current-students/resources/three-minute-thesis/'
                                 target="_blank" rel="noopener noreferrer">three
                            minutes and one static slide</a> to convey my Ph.D. research. I had to communicate
                            the problem and what I was doing about it to a panel of judges that were not familiar
                            with my work or field. Needless to say, it was a challenge (and public speaking is
                            one of my least favourite things to do).
                        </p>
                        <p>
                          I did it though, and am quite pleased with how I did. People were surprised that I could speak that
                          loudly. That must have helped capture the attention of another
                          student who came to work in our lab the following summer. They claim that it was my 3MT that
                          interested them in it, and I can&#39;t think of a higher form of praise.
                        </p>
                        <p>
                            Since the focus is on <i>what</i> I wanted to say, I kept it simple and designed the slide
                            in PowerPoint.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                            <p>
                                Third Place in the IBM Canada Markham Lab TechChallenge
                                <br className='my-1'></br>
                                <i className='has-text-weight-medium'>April 2013</i>
                            </p>
                            }
                                pictureSrc={null}
                                lighter>
                        <p>
                            This was a fun, three-week design challenge. In teams of five, we designed
                            a user experience and interface for
                            a game targeted at high school students by
                            creating personas and paper
                            prototypes.
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
                    Academic Merit
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
                                        <span className='has-text-weight-semibold'>
                                          McMaster University Dean&#39;s Award for Excellence 
                                          in Communicating Graduate Research
                                        </span>
                                        <br></br>
                                        <span className='has-text-weight-medium'><i>2022</i></span>
                                        <ul>
                                            <li>Awarded to the top winners of <a className="is-link"
                                                                                 href='https://gs.mcmaster.ca/current-students/resources/gradflix-video-competition/'
                                                                                 target="_blank" rel="noopener noreferrer">McMaster&#39;s Second Annual GradFlix competition</a></li>
                                        </ul>
                                    </p>

                                    <p>
                                        <a className='is-link has-text-weight-semibold'
                                           href='https://gs.mcmaster.ca/current-students/scholarships/ontario-graduate-scholarship-and-the-queen-elizabeth-ii-graduate-scholarship-in-science-and-technology/'
                                           target="_blank" rel="noopener noreferrer">Ontario
                                          Graduate Scholarship (OGS)</a>
                                          <br></br>
                                          <span className='has-text-weight-medium'><i>2020</i></span>
                                        <ul>
                                            <li>A merit-based scholarship for students with an average of A- or higher</li>
                                        </ul>
                                    </p>

                                    <p>
                                      <span className='has-text-weight-semibold'>McMaster University Dean&#39;s Honour List</span>
                                      <br></br>
                                      <span className='has-text-weight-medium'><i>2010, 2011, 2013</i></span>
                                      <ul>
                                        <li>Awarded to students that achieve a minimum of 9.5 / 12.0 GPA in 30 course units
                                            (approx. 10 courses)
                                        </li>
                                        <li>I was away on co-op for the 2012 academic year</li>
                                      </ul>
                                    </p>

                                    <p>
                                      <span className='has-text-weight-semibold'>Golden Key International Honour Society Member</span>
                                      <br></br>
                                      <span className='has-text-weight-medium'><i>2012</i></span>
                                      <ul>
                                        <li>
                                          Awarded for being in the <span className='has-text-weight-medium'>top 15%
                                          of the class</span> at McMaster University
                                        </li>
                                      </ul>
                                    </p>

                                    <p>
                                      <span className='has-text-weight-semibold'>The McMaster Honour Award, Level 2</span>
                                      <br></br>
                                      <span className='has-text-weight-medium'><i>2009</i></span>
                                      <ul>
                                        <li>
                                          Awarded for having an admission average in the 85–89.99% range
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
