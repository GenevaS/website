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
                            Graduate Teaching Assistant
                            <br></br>
                            <i>Data Structures and Algorithms (COMPSCI 2C03), McMaster University</i>
                          </p>
                        }
                        tileLink={
                          <p className='has-text-weight-medium px-3'>
                            2022, 2018, 2016
                            <br></br>
                            Winter Term (January to April)
                          </p>
                        }
                        pictureSrc={null}
                        pictureAlt=""
                        lighter>
                          <div className='content is-flex is-flex-direction-column is-align-self-flex-start'>
                            <span className='has-text-weight-medium'>Course Description</span>
                            <p>
                              Basic data structures: stacks, queues, hash tables, and binary trees; searching and
                              sorting; graph representations and algorithms, including minimum spanning trees,
                              traversals, shortest paths; introduction to algorithmic design strategies; correctness
                              and performance analysis.
                            </p>

                            <span className='has-text-weight-medium'>Duties & Tasks</span>
                            <ul>
                              <li>

                              </li>
                            </ul>
                          </div>
                      </InfoTile>

                      <InfoTile tileTitle={
                          <p className='has-text-weight-medium px-3'>
                            Graduate Teaching Assistant
                            <br></br>
                            <i>Human Computer Interaction (COMPSCI/SWFRENG 4HC3), McMaster University</i>
                          </p>
                        }
                        tileLink={
                          <p className='has-text-weight-medium px-3'>
                            2021, 2018, 2017, 2016, 2015, 2014
                            <br></br>
                            Fall Term (September to December)
                          </p>
                        }
                        pictureSrc={null}
                        pictureAlt=""
                        lighter>
                          <div className='content is-flex is-flex-direction-column is-align-self-flex-start'>
                            <span className='has-text-weight-medium'>Course Description</span>
                            <p>
                              Design of user interfaces. Principles of good interface design. Human input.
                              Displaying complex data using graphics and virtual reality. Modes and mode awareness
                              problem. Health issues, information overload. Special purpose graphics hardware.
                              Interface design tools; on-line help systems.
                            </p>

                            <span className='has-text-weight-medium'>Duties & Tasks</span>
                            <ul>
                              <li>

                              </li>
                            </ul>
                          </div>
                      </InfoTile>

                      <InfoTile tileTitle={
                          <p className='has-text-weight-medium px-3'>
                            Graduate Teaching Assistant
                            <br></br>
                            <i>Software Testing (SFWRENG 3S03), McMaster University</i>
                          </p>
                        }
                        tileLink={
                          <p className='has-text-weight-medium px-3'>
                            2021, 2020
                            <br></br>
                            Winter Term (January to April)
                          </p>
                        }
                        pictureSrc={null}
                        pictureAlt=""
                        lighter>
                          <div className='content is-flex is-flex-direction-column is-align-self-flex-start'>
                            <span className='has-text-weight-medium'>Course Description</span>
                            <p>
                              Measurements. Unit testing, slicing and debugging, integration testing,
                              regression testing, testing strategies, test coverage.
                            </p>

                            <span className='has-text-weight-medium'>Duties & Tasks</span>
                            <ul>
                              <li>

                              </li>
                            </ul>
                          </div>
                      </InfoTile>

                      <InfoTile tileTitle={
                          <p className='has-text-weight-medium px-3'>
                            Graduate Teaching Assistant
                            <br></br>
                            <i>Digital Systems and Interfacing (SFWRENG 2DA4), McMaster University</i>
                          </p>
                        }
                        tileLink={
                          <p className='has-text-weight-medium px-3'>
                            2020
                            <br></br>
                            Fall Term (September to December)
                          </p>
                        }
                        pictureSrc={null}
                        pictureAlt=""
                        lighter>
                          <div className='content is-flex is-flex-direction-column is-align-self-flex-start'>
                            <span className='has-text-weight-medium'>Course Description</span>
                            <p>
                              Memory, binary arithmetic, hierarchical design. Hardware/software co-design
                              and application specific processors. Interfacing to I/O devices.
                            </p>

                            <span className='has-text-weight-medium'>Duties & Tasks</span>
                            <ul>
                              <li>
                                Prepared for weekly labs by implementing the described system in
                                Verilog via Quartus with the DE1-SoC board as the target device
                              </li>
                              <li>
                                Supervised and evaluated weekly hardware labs remotely via Microsoft
                                Teams, assisted by an undergraduate TA
                              </li>
                              <li>
                                Gave feedback and grades for submitted work via the course delivery
                                platform (Avenue to Learn)
                              </li>
                              <li>
                                Maintained student grade spreadsheet (Excel) and course delivery
                                platform (Avenue to Learn)
                              </li>
                            </ul>
                          </div>
                      </InfoTile>

                      <InfoTile tileTitle={
                          <p className='has-text-weight-medium px-3'>
                            Graduate Teaching Assistant
                            <br></br>
                            <i>Software Requirements and Security Considerations (COMPSCI/SFWRENG 3RA3), McMaster University</i>
                          </p>
                        }
                        tileLink={
                          <p className='has-text-weight-medium px-3'>
                            2019
                            <br></br>
                            Fall Term (September to December)
                          </p>
                        }
                        pictureSrc={null}
                        pictureAlt=""
                        lighter>
                          <div className='content is-flex is-flex-direction-column is-align-self-flex-start'>
                            <span className='has-text-weight-medium'>Course Description</span>
                            <p>
                              Software requirements gathering. Critical systems requirements gathering. Security
                              requirements. Traceability of requirements. Verification, validation, and
                              documentation techniques. Software requirements quality attributes. Security policies.
                              Measures for data confidentiality. Design principles that enhance security. Access
                              control mechanisms.
                            </p>

                            <span className='has-text-weight-medium'>Duties & Tasks</span>
                            <ul>
                              <li>

                              </li>
                            </ul>
                          </div>
                      </InfoTile>

                      <InfoTile tileTitle={
                          <p className='has-text-weight-medium px-3'>
                            Graduate Teaching Assistant, McMaster University
                            <br></br>
                            <i>Practice and Experience: Basic Concepts (COMPSCI 1XA3)</i>
                          </p>
                        }
                        tileLink={
                          <p className='has-text-weight-medium px-3'>
                            February to April 2017,
                            <br></br>
                            January to April 2015
                          </p>
                        }
                        pictureSrc={null}
                        pictureAlt=""
                        lighter>
                          <div className='content is-flex is-flex-direction-column is-align-self-flex-start'>
                            <span className='has-text-weight-medium'>Course Description</span>
                            <p>
                              Practical experience with implementing basic CS concepts such as data representation,
                              recursion, computer architecture, concurrency. Hands-on application of CS concepts
                              to formulating, analyzing, and solving problems.
                            </p>

                            <span className='has-text-weight-medium'>Duties & Tasks</span>
                            <ul>
                              <li>
                                Collaborating with course instructors to discuss course content, and develop student
                                assignments and grading schemes
                              </li>

                              <li>

                              </li>

                            </ul>
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
