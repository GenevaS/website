/* ---------------------------------------------------------------
 * TEACHING EXPERIENCE (Content and Layout)
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
              <div className="card">
                <header className="card-header is-align-items-center">
                  <h1 className="card-header-title">
                    Teaching Experience
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
