/* ---------------------------------------------------------------
 * COMMUNITY ENGAGEMENT/VOLUNTEERING (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'
import imgLoader from "../lib/imageloader"

import gscaleCard from "../public/images/gscale_businesscard_front.png"
import genevaCard from "../public/images/gscale_businesscard_back_Geneva.png"
import sashaCard from "../public/images/gscale_businesscard_back_Sasha.png"
import caretteCard from "../public/images/gscale_businesscard_Carette.png"
import licsLogo from "../public/images/lambda-logo-icon.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

const worldIcon = <FontAwesomeIcon className='has-text-black' icon={faGlobeAmericas} transform='grow-7' alt="World Wide Web Icon"/>

const licsLogoPicture = <Image
                          priority
                          loader={imgLoader}
                          src={licsLogo}
                          height={150}
                          width={150}
                          alt="LiCS Logo"/>;

const licsDescription = <p>
                          This is a graduate student group in the <a className="is-link"
                                                                     href="https://www.eng.mcmaster.ca/cas"
                                                                     target="_blank" rel="noopener noreferrer">Department
                          of Computing and Software</a> at McMaster. Our goals
                          include building a community of graduate students, 
                          faculty, and staff through social events, and to 
                          advocate for the graduate students in the department.
                        </p>;

const gscaleWebsiteLink = <a className="icon"
                             href="https://gscale.cas.mcmaster.ca/"
                             target="_blank" rel="noopener noreferrer"
                             aria-label="Go to G-ScalE Website">
                              {worldIcon}
                          </a>

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
                    Service to the Academic Community
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
                                    Peer Reviewer
                                  </p>
                              }
                              tileLink={
                                <span></span>
                              }
                              pictureSrc={null}
                              pictureAlt=""
                              lighter>
                          <table className='column is-full px-3 py-0'>
                            <tr className='columns is-full px-0 py-2'>
                              <td className='column is-one-fifth p-0'>2022, 2023</td>
                              <td className='column is-three-fifths p-0'><a className="is-link"
                                                      href="https://ieeexplore.ieee.org/xpl/aboutJournal.jsp?punumber=5165369"
                                                      target="_blank" rel="noopener noreferrer"><i>IEEE Transactions on Affective Computing</i></a></td>
                              <td className='column is-one-fifth p-0'>2 Articles</td>
                            </tr>
                          </table>
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
                    Service to the Department of Computing and Software, McMaster University
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
                    <table className='column is-full p-0'>

                      <tr className='columns is-full m-0 px-0 py-2'>
                        <td className='column is-one-fifth p-0'>2021–2022</td>
                        <td className='column is-two-fifths p-0'>Hiring Committee</td>
                        <td className='column is-two-fifths p-0'>Graduate Student Representative</td>
                      </tr>

                      <tr className='columns is-full m-0 px-0 py-2'>
                        <td className='column is-one-fifth p-0'>Jan.–Apr. 2020</td>
                        <td className='column is-two-fifths p-0'>Graduate Curriculum Planning Meeting</td>
                        <td className='column is-two-fifths p-0'>Graduate Student Representative</td>
                      </tr>

                    </table>
                </article>
              </div>
            </div>

            <div className='column'>
              <div className="card">
                <header className="card-header is-align-items-center">
                  <h1 className="card-header-title">
                    Service to the G-ScalE Lab, Department of Computing and Software, McMaster University
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
                                    G-Scale Website
                                  </p>
                              }
                              tileLink={gscaleWebsiteLink}
                              pictureSrc={null}
                              pictureAlt=""
                              lighter>
                          <table className='column is-full px-3 py-0'>

                            <tr className='columns is-full px-0 py-2'>
                              <td className='column is-one-quarter p-0 has-text-left'>May 2022–Present</td>
                              <td className='column is-three-quarters p-0 has-text-left'>Webmaster</td>
                            </tr>

                            <tr className='columns is-full px-0 py-2'>
                              <td className='column is-one-quarter p-0 has-text-left'>2022</td>
                              <td className='column is-three-quarters p-0 has-text-left'>Web Designer & Developer</td>
                            </tr>

                          </table>
                      </InfoTile>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                    <InfoTile tileTitle={
                                            <p>
                                              G-ScalE Logos and Business Cards
                                              <br className='my-1'></br>
                                              <i className='has-text-weight-medium'>2018</i>
                                            </p>
                                          }
                              tileLink={<span></span>}
                              pictureSrc={null}
                              lighter>
                        <p>
                          When we were discussing how to best market the work we do at
                          the <a className='is-link'
                                 href='https://gscale.cas.mcmaster.ca/'
                                 target="_blank" rel="noopener noreferrer">Gaming Scalability Environment (G-ScalE) lab</a>,
                          my supervisor, lab mates, and I decided that having a logo was
                          a good idea. We could put it on our presentation slides, and visually distinguish ourselves online. You can
                          see some of this work in the wild
                          on <a className="is-link"
                                href="https://twitter.com/lab_scale"
                                target="_blank" rel="noopener noreferrer">G-ScalE&#39;s Twitter page</a>,
                          and in the footer of this page next to the link to my profile on the G-ScalE website.
                          We also decided to make some business cards to give out at meetings and
                          conferences.
                        </p>
                        <p>
                          This was a fun project. It let me practice my visual design and Photoshop skills, 
                          incorporate feedback from other members of the lab, and ensure that certain
                          pieces could scale well if its size changed on a webpage.
                        </p>

                        <div className='is-flex is-justify-content-space-evenly is-flex-wrap-wrap
                                        is-full-width
                                        mt-4'>
                          <Image
                            priority
                            loader={imgLoader}
                            src={gscaleCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>

                          <Image
                            priority
                            loader={imgLoader}
                            src={caretteCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>

                          <Image
                            priority
                            loader={imgLoader}
                            src={genevaCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>

                          <Image
                            priority
                            loader={imgLoader}
                            src={sashaCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>
                        </div>
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
                    Community Involvement—McMaster University
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
                              Life in Computing and Software (LiCS)
                              <br className='my-1'></br>
                              <i className='has-text-weight-medium'>May 2022 to Present, May 2018 to September 2020</i>
                            </p>
                          }
                          tileLink={<span></span>}
                              pictureSrc={null}
                              pictureAlt=""
                              lighter>
                        <div className='content'>

                          <div className='is-flex is-flex-direction-column
                                          is-justify-content-center is-align-items-center
                                          is-hidden-tablet'>
                            <div className='is-align-self-center'>
                              {licsLogoPicture}
                            </div>

                            {licsDescription}

                          </div>

                          <div className='is-flex is-justify-content-center
                                          is-align-items-center is-align-self-center
                                          is-hidden-mobile'>
                            <div className='is-flex-grow-5 mx-3'>
                              {licsLogoPicture}
                            </div>

                            <div className='is-flex-shrink-5 ml-3'>
                              {licsDescription}
                            </div>

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
                              Was the Vice President Administration (May 2019 to September 2020), which 
                              includes recording the LiCS Executive Meeting Minutes and participating 
                              in the Graduate Student Association (GSA) Clubs Meeting and follow-up in 2020
                            </li>

                            <li>
                              Assisted with tasks associated with the Vice President of Finance,
                              such as recording and reimbursing LiCS members for event-related expenses
                            </li>

                            <li>
                              Attended the Graduate Curriculum Planning Meeting (GCPC) as
                              the graduate student representative for the Winter 2020 
                              term (January to April)
                            </li>

                            <li>
                              Assisted with event planning and execution
                            </li>

                            <li>
                              Acted as an &#34;Advisor to the Executive Core&#34; where I continue to provide
                              advice and information to new LiCS members
                            </li>
                          </ul>
                        </div>
                      </InfoTile>

                      <InfoTile tileTitle={
                                  <p>
                                    McMaster IEEE Student Branch
                                    <br className='my-1'></br>
                                    <i className='has-text-weight-medium'>September 2014 to April 2017</i>
                                  </p>
                                }
                              tileLink={<span></span>}
                              pictureSrc={null}
                              pictureAlt=""
                              lighter>
                        <div className='content'>
                          <p>
                            This student group represents the <a className="is-link"
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
                              Taught lab safety training and hands-on soldering skills
                            </li>

                            <li>
                              Was the Branch Secretary (September 2015 to April 2016), which
                              entailed recording and publishing the weekly Meeting Minutes
                            </li>
                            
                          </ul>
                        </div>
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
                    Community Involvement—Other
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
                                    IBM Future Blue Events
                                    <br className='my-1'></br>
                                    <i className='has-text-weight-medium'>May 2012 to August 2013</i>
                                  </p>
                                }
                              tileLink={<span></span>}
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
                              Spending a morning in a Grade 6 classroom to help spark
                              interest in science and engineering (I&#39;ll never forget the look
                              on one student&#39;s face when they realized that the monitor was not the
                              computer)
                            </li>

                            <li>
                              Helped supervise STEM-oriented activities for Grade 8 girls
                            </li>

                            <li>
                              Raised money for charity by offering to draw whatever my coworkers wanted on
                              their office-door whiteboards, including one of them as Spock
                              from <i>Star Trek</i> that their team commissioned as a surprise
                            </li>

                            <li>
                              Encouraged discussion and participation during the annual IBM event where current
                              and incoming interns get to know each other through team events
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
