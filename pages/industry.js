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
                          <p className='has-text-weight-medium px-3'>
                            DB2 Information Developer (Co-op)
                            <br></br>
                            <i>IBM Markham Lab</i>
                          </p>
                      }
                      tileLink={
                        <p className='has-text-weight-medium px-3'>
                          May 2012 to August 2013
                          <br></br>
                          (16 months)
                        </p>
                      }
                      pictureSrc={null}
                      pictureAlt=""
                      lighter>
                        <div className='content'>
                          <p>
                            <ul>
                              <li>
                                <span className='has-text-weight-medium'>Maintained technical
                                documentation</span> for the IBM DB2 for Linux, Unix, and Windows product
                                and <span className='has-text-weight-medium'>collaborated with
                                developers</span> to create new documentation and updates
                              </li>
                              <li>
                                <span className='has-text-weight-medium'>Promoted discussion between
                                teams</span> in response to technical problems raised by customers
                              </li>
                              <li>
                                <span className='has-text-weight-medium'>Created documents</span> for hosting
                                installation requirement information and assisted with
                                the <span className='has-text-weight-medium'>data migration</span> to a new
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
