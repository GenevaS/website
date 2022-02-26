/* ---------------------------------------------------------------
 * PAGE LAYOUT (Nav Bar, Main Content, Footer)
 * ---------------------------------------------------------------
 * - "Rail" navigation on left side of page, main container takes
 *   70% of the page body width
 * - Footer is "stuck" to the bottom of the page so that it doesn't
 *   "float" to the middle of the page when there is not enough
 *   main content to fill the vertical space
 *
 *      --------------------------
 *      | Nav |    Main          |
 *      |     |   Content        |
 *      |     |                  |
 *      |     |                  |
 *      |     |                  |
 *      |     | -----------------|
 *      |     | 'Sticky' Footer  |
 *      --------------------------
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

export const siteTitle = 'Geneva M. Smith'

export default function Layout({ children }) {
    return (
      <div className='has-background-grey-lighter'>
        <Head>
          <link rel="icon" href="puzzle-piece-solid.svg" />
          <meta
            name="description"
            content="Personal website for Geneva M. Smith"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
        </Head>

        {/* Page Layout */}
        <div className='container is-flex is-justify-content-center is-max-widescreen'>
          <NavBar></NavBar>

          <div className='is-width-70-percent withstickyfoot'>
            <main className='is-flex is-flex-grow-1
                             is-justify-content-center'>
              {children}
            </main>

            <Footer></Footer>
          </div>

        </div>
    </div>
  )
}
