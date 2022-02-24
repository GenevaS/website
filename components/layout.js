import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import utilStyles from '../styles/utils.module.css'

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

        <div className='columns is-flex is-flex-direction-row is-justify-content-center is-gapless'>
          <div className='column is-one-fifth'>
            <div className={utilStyles.stationary}>
              <NavBar></NavBar>
            </div>
          </div>

          <div className='column is-half'>
            <div className={utilStyles.withstickyfoot}>
              <main className='is-flex is-flex-grow-1'>{children}</main>
              <Footer></Footer>
            </div>
          </div>
        </div>
    </div>
  )
}
