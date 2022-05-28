/* ---------------------------------------------------------------
 * TEACHING AND WORK EXPERIENCE, AWARDS (Content and Layout)
 * ---------------------------------------------------------------
 */

import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'

export default function Teaching( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className='is-full-width pt-6'>
          <div className='columns is-flex-direction-column px-6'>

            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <InfoTile tileTitle={
                          <p className='has-text-weight-medium px-3'>
                            Teaching Experience
                          </p>
                        }
                        pictureSrc={null}
                        pictureAlt=""
                        lighter>
                          <div className='content'>
                            <p>
                              I have been a teaching assistant for a number of years, which has allowed me to
                              develop my teaching skills, as well as course content and delivery. I have
                              taught undergraduate students topics in human-computer interactions, fundamental
                              data structures & algorithms, software requirements and testing, basic programming
                              skills, and digital logic. This also included teaching practical skills such as
                              experiment design and designing with the user in mind.
                            </p>

                            <p>
                              Some tasks that I performed as a teaching assistant, both in-person and virtually, are:
                              <ul>
                                <li>
                                  Preparing and delivering tutorials and labs where I worked collaboratively with
                                  students to develop solutions to practice and design problems
                                </li>
                                <li>
                                  Collaborating with course instructors to discuss course content, and develop student
                                  assignments and grading schemes
                                </li>
                                <li>
                                  Assisted with the delivery of online course content, such as organizing online
                                  grading rubrics and assignment dropboxes
                                </li>
                                <li>
                                  Provided feedback on student work and meeting with students to review it
                                </li>
                              </ul>
                            </p>
                          </div>
                      </InfoTile>

                      <InfoTile tileTitle={
                          <p className='has-text-weight-medium px-3'>
                            Awards & Accolades
                          </p>
                        }
                        pictureSrc={null}
                        pictureAlt=""
                        lighter>
                          <div className='content'>

                            <p>
                              Second Place in McMaster University&#39;s Department of Computing and Software Annual Poster Session
                              <br></br>
                              <i>April 2022</i>
                              <ul>
                                <li>
                                  An internal department poster competition for graduate students
                                </li>
                                <li>
                                  Awarded first place for Aesthetic Poster Design and tied for second place People&#39;s
                                  Choice
                                </li>
                              </ul>
                            </p>

                            <p>
                              McMaster University Dean&#39;s Award for Excellence in Communicating Graduate Research
                              <br></br>
                              <i>April 2022</i>
                              <ul>
                                <li>
                                  Gained for placing 3rd and receiving People&#39;s Choice award in GradFlix, a video
                                  competition run by the McMaster School of Graduate Studies
                                </li>
                                <li>Interested in knowing more? Visit my <Link href='/projects'><a className='is-link'>Projects</a></Link> page!</li>
                              </ul>
                            </p>

                            <p>
                              <a className='is-link' href='https://gs.mcmaster.ca/current-students/scholarships/ontario-graduate-scholarship-and-the-queen-elizabeth-ii-graduate-scholarship-in-science-and-technology/'>Ontario Graduate Scholarship (OGS)</a> 2020/2021
                              <ul>
                                <li>A merit-based scholarship for students with an average of A- or higher</li>
                              </ul>
                            </p>

                            <p>
                              IBM Canada Markham Lab TechChallenge (Third Place)
                              <br></br>
                              <i>April 2013</i>
                              <ul>
                                <li>
                                  Designed the user experience and interface for a game targeted at high school students
                                  by creating personas and paper prototypes
                                </li>
                                <li>Developed in a team of five over a three week period</li>
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
                                <li>Awarded for being in the top 15% of the class at McMaster University</li>
                              </ul>
                            </p>

                          </div>
                      </InfoTile>

                      <InfoTile tileTitle={
                          <p className='has-text-weight-medium px-3'>
                            Industry Experience
                          </p>
                      }
                      pictureSrc={null}
                      pictureAlt=""
                      lighter>
                        <div className='content'>
                          <p>
                            DB2 Information Developer (Co-op), Markham Lab
                            <br></br>
                            <i>May 2012 to August 2013 (16 months)</i>
                            <ul>
                              <li>
                                Maintained technical documentation for the IBM DB2 for Linux, Unix, and Windows product
                                and collaborated with developers to create new documentation and updates
                              </li>
                              <li>
                                Promoted discussion between teams in response to technical problems raised by customers
                              </li>
                              <li>
                                Created documents for hosting installation requirement information and assisted with the
                                data migration to a new platform for the DB2 for Linux, Unix, and Windows and DB2 Connect
                                products
                              </li>
                            </ul>
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
