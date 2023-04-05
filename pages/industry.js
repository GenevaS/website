/* ---------------------------------------------------------------
 * INDUSTRY EXPERIENCE (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'

export default function Industry( ) {
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
                    Education
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
                                    is-align-items-center p-3">                    
                    <table className='column is-full p-0'>

                      <tr className='columns is-full mx-0 px-0 mt-1 mb-2 has-text-weight-semibold'>
                        <td className='column is-one-fifth p-0'>2017–2023 (ABD)</td>
                        <td className='column is-two-fifths p-0'>Ph.D., Software Engineering</td>
                        <td className='column is-two-fifths p-0'>McMaster University</td>
                      </tr>

                      <tr>
                        <td>Thesis: Start Your EM(otion En)gine: Towards Computational Models of Emotion for 
                            Improving the Believability of Video Game Non-Player Characters (In preparation)</td>
                      </tr>

                      <tr>
                        <td>Supervisor: <a className='is-link'
                                                  href="https://gscale.cas.mcmaster.ca/author/jacques-carette/"
                                                  target="_blank" rel="noopener noreferrer"
                                                  aria-label="Go to Dr. Jacque Carette's profile on G-ScalE's website">Dr. Jacques Carette</a></td>
                      </tr>

                      <hr className='has-background-grey my-3'></hr>

                      <tr className='columns is-full mx-0 px-0 mt-1 mb-2 has-text-weight-semibold'>
                        <td className='column is-one-fifth p-0'>2014–2017</td>
                        <td className='column is-two-fifths p-0'>M.A.Sc., Software Engineering</td>
                        <td className='column is-two-fifths p-0'>McMaster University</td>
                      </tr>

                      <tr>
                        <td>Thesis: GLaDOS: Integrating Emotion-Based Behaviours into Non-Player Characters in
                            Computer Role-Playing Games (<a className='is-link'
                                 href='http://hdl.handle.net/11375/21369'
                                 target="_blank" rel="noopener noreferrer"
                                 style={{wordBreak: "break-all"}} aria-label="Go to official page for GLaDOS: Integrating Emotion-Based Behaviours into Non-Player Characters in Computer
                                                                              Role-Playing Games">http://hdl.handle.net/11375/21369</a>)</td>
                      </tr>

                      <tr>
                        <td>Supervisor: <a className='is-link'
                                                  href="https://gscale.cas.mcmaster.ca/author/jacques-carette/"
                                                  target="_blank" rel="noopener noreferrer"
                                                  aria-label="Go to Dr. Jacque Carette's profile on G-ScalE's website">Dr. Jacques Carette</a></td>
                      </tr>

                      <hr className='has-background-grey my-3'></hr>

                      <tr className='columns is-full mx-0 px-0 mt-1 mb-2 has-text-weight-semibold'>
                        <td className='column is-one-fifth p-0'>2009–2014</td>
                        <td className='column is-two-fifths p-0'>B.Eng. (With Distinction)</td>
                        <td className='column is-two-fifths p-0'>McMaster University</td>
                      </tr>

                      <tr className='columns is-full m-0 px-0'>
                        <td className='column is-one-fifth p-0'></td>
                        <td className='column is-two-fifths p-0'>Software Engineering & Game Design</td>
                        <td className='column is-two-fifths p-0'></td>
                      </tr>

                    </table>
                </article>
              </div>
            </div>

            <div className='column'>
              <div className="card">
                <header className="card-header is-align-items-center">
                  <h1 className="card-header-title">
                    Industry Experience
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
                            DB2 Information Developer (Co-op), IBM Markham Lab
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
                            <ul>
                              <li>
                                Maintained technical
                                documentation for the IBM DB2 for Linux, Unix, and Windows product
                                and collaborated with
                                developers to create new documentation and updates
                              </li>
                              <li>
                                Promoted discussion between
                                teams in response to technical problems raised by customers
                              </li>
                              <li>
                                Created documents for hosting
                                installation requirement information and assisted with
                                the data migration to a new
                                platform for the DB2 for Linux, Unix, and Windows and DB2 Connect
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
