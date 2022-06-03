/* ---------------------------------------------------------------
 * PAGE LAYOUT (Nav Bar, Main Content, Footer)
 * ---------------------------------------------------------------
 */

import { useState } from 'react';
import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

export const siteTitle = 'Geneva M. Smith'

export default function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
      setMenuOpen(!menuOpen);
    }

    return (
      <div className='has-background-grey-lighter'>
        <Head>
          <link rel="icon" href="/images/puzzle-piece-solid.svg" />
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

        {/* Page Layout for Desktop and Larger
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
        */}
        <div className='container is-hidden-touch
                        is-flex is-justify-content-center
                        is-max-widescreen'>
          <nav className='is-flex
                          has-background-primary pt-6' role="navigation" aria-label="main navigation">
            <NavBar></NavBar>
          </nav>


          <div className='is-width-70-percent withstickyfoot'>
            <main className='is-flex is-flex-grow-1
                             is-justify-content-center'>
              {children}
            </main>

            <Footer></Footer>
          </div>

        </div>

        {/* Page Layout for Tablet and Smaller
          * ---------------------------------------------------------------
          * - Nav bar, content, and footer are stacked in a single column
          * - Navigation at the top of the page, hidden behind dropdown
          *   "hamburger" button
          * - Footer is "stuck" to the bottom of the page so that it doesn't
          *   "float" to the middle of the page when there is not enough
          *   main content to fill the vertical space
          *
          *      --------------------
          *      |       Nav        |
          *      |------------------|
          *      |    Main          |
          *      |   Content        |
          *      |                  |
          *      |------------------|
          *      | 'Sticky' Footer  |
          *      --------------------
          * ---------------------------------------------------------------
        */}
        <div className='container is-hidden-desktop
                        is-flex is-flex-direction-column'>
          <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand has-background-primary">
              <span className='is-align-self-center pl-4 mb-1 subtitle'>Geneva M. Smith</span>
              <a id="hamburger-menu-button"
                 role="button" className={menuOpen ? 'navbar-burger is-active' : 'navbar-burger'}
                 aria-label="menu" aria-expanded="false"
                 onClick={toggleMenu}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div className={menuOpen ? 'navbar-menu has-shadow has-background-primary p-0 is-active' : 'navbar-menu has-shadow has-background-primary p-0'}>
              <NavBar></NavBar>
            </div>
          </nav>

          <div className='withstickyfoot pt-6'>
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
