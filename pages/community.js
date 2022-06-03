/* ---------------------------------------------------------------
 * COMMUNITY ENGAGEMENT/VOLUNTEERING (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'
import imgLoader from "../lib/imageloader"

import licsLogo from "../public/lambda-logo-icon.svg"

const licsLogoPicture = <Image
                          priority
                          loader={imgLoader}
                          src={licsLogo}
                          layout="fixed"
                          height={100}
                          width={100}
                          alt="LiCS Logo"/>;

const licsDescription = <span>
                          This is a graduate student group in the <a className="is-link"
                                                                     href="https://www.eng.mcmaster.ca/cas"
                                                                     target="_blank" rel="noopener noreferrer">Department
                          of Computing and Software</a> at McMaster. Our goals
                          include <span className='has-text-weight-medium'>building a community of graduate
                          students, faculty, and staff</span> through social events, and
                          to <span className='has-text-weight-medium'>advocate for the graduate
                          students</span> within the department.
                        </span>;

export default function Community( ) {
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
                    Community Engagement
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
                        Life in Computing and Software (LiCS)
                        <br></br>
                        <i>McMaster University</i>
                      </p>
                      }
                      tileLink={
                        <p className='has-text-weight-medium px-3'>
                          May 2022 to Present,
                          <br></br>
                          May 2018 to September 2020
                        </p>
                      }
                              pictureSrc={null}
                              pictureAlt=""
                              lighter>
                        <div className='content'>

                          <div className='is-flex is-flex-direction-column
                                          is-justify-content-center is-hidden-tablet'>
                            <div className='is-align-self-center'>
                              {licsLogoPicture}
                            </div>

                            <p>{licsDescription}</p>

                          </div>

                          <div className='is-flex is-justify-content-center is-hidden-mobile'>
                            <div className='mx-3'>
                              {licsLogoPicture}
                            </div>


                              <p className='is-align-self-center ml-3'>
                                {licsDescription}
                              </p>
                          </div>

                          <p>
                            To this end, we strive to run weekly coffee houses, biweekly board game nights,
                            and at least one large social event each month (e.g. Department Mixer, Student
                            Retreat, Ice Cream Social). We also provide supports for students that wish to
                            run their own events, such as a biweekly group discussion on topics in Artificial
                            Intelligence. We also have LiCS members sit on department committees and meetings
                            as a graduate student representative. They are tasked with voicing graduate student
                            concerns and experiences, and reporting back to the larger student community.
                          </p>

                          <p>
                            During my time with LiCS, I:
                          </p>
                          <ul>
                            <li>
                              Filled the role of <span className='has-text-weight-medium'>Vice President
                              Administration</span> (May 2019 to September 2020), which includes recording
                              the LiCS Executive Meeting Minutes and participating in the Graduate Student
                              Association (GSA) Clubs Meeting and follow-up in 2020
                            </li>

                            <li>
                              <span className='has-text-weight-medium'>Assisted</span> with tasks associated
                              with the <span className='has-text-weight-medium'>Vice President of Finance</span>,
                              such as recording and reimbursing LiCS members for event-related expenses
                            </li>

                            <li>
                              Attended the <span className='has-text-weight-medium'>Graduate
                              Curriculum Planning Meeting (GCPC)</span> as
                              the <span className='has-text-weight-medium'>graduate student
                              representative</span> for the Winter 2020 term (January to April)
                            </li>

                            <li>
                              Assisted with event planning and execution
                            </li>

                            <li>
                              Acted as an <span className='has-text-weight-medium'>&#34;Advisor
                              to the Executive Core&#34;</span> where I continue to provide
                              advice and information to new LiCS members
                            </li>
                          </ul>
                        </div>
                      </InfoTile>

                      <InfoTile tileTitle={
                                  <p className='has-text-weight-medium px-3'>
                                    McMaster IEEE Student Branch
                                    <br></br>
                                    <i>McMaster University</i>
                                  </p>
                              }
                              tileLink={
                                <p className='has-text-weight-medium px-3'>
                                  September 2014 to April 2017
                                </p>
                              }
                              pictureSrc={null}
                              pictureAlt=""
                              lighter>
                        <div className='content'>
                          <p>
                            This student group represents the <a className="is-link has-text-weight-medium"
                                                                 href="https://www.ieee.org/"
                                                                 target="_blank" rel="noopener noreferrer">IEEE</a>,
                            one of the largest international, technical,
                            and professional associations. They offer practical skills training, as well as
                            services for building and testing circuit boards.
                          </p>

                          <p>
                            During my time here, I:
                          </p>
                          <ul>
                            <li>
                              Taught <span className='has-text-weight-medium'>lab safety training and
                              hands-on soldering skills</span>
                            </li>

                            <li>
                              Filled the role of <span className='has-text-weight-medium'>Branch
                              Secretary</span> (September 2015 to April 2016), which
                              entailed recording and publishing the weekly Meeting Minutes
                            </li>

                            <li>
                              Responded to general student inquiries about branch events and services
                            </li>
                          </ul>
                        </div>
                      </InfoTile>

                      <InfoTile tileTitle={
                                  <p className='has-text-weight-medium px-3'>
                                    IBM Future Blue Events
                                    <br></br>
                                    <i>IBM, Markham, ON</i>
                                  </p>
                              }
                              tileLink={
                                <p className='has-text-weight-medium px-3'>
                                  May 2012 to August 2013
                                </p>
                              }
                              pictureSrc={null}
                              pictureAlt=""
                              lighter>
                        <div className='content'>
                          <p>
                            During my 16-month co-op at IBM, I was able to participate in many events
                            that enriched my experience there. These included:
                          </p>

                          <ul>
                            <li>
                              Spending a morning in a <span className='has-text-weight-medium'>Grade 6
                              classroom</span> to help <span className='has-text-weight-medium'>spark
                              interest in science and engineering</span> (I&#39;ll never forget the look
                              on one student&#39;s face when they realized that the monitor was not the
                              computer)
                            </li>

                            <li>
                              Helped supervise <span className='has-text-weight-medium'>STEM</span>-oriented
                              activities for <span className='has-text-weight-medium'>Grade 8 girls</span>
                            </li>

                            <li>
                              Raised money for charity by offering to draw whatever my coworkers wanted on
                              their office-door whiteboards, including one of them as Spock
                              from <i>Star Trek</i> that their team commissioned as a surprise
                            </li>

                            <li>
                              Encouraged discussion and participation during the annual IBM event where current
                              and incoming interns get to know each other through <span className='has-text-weight-medium'>team
                              events</span>
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
