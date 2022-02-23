import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Link from 'next/link'

const name = 'GenevaMSmith'
export const siteTitle = 'Geneva M. Smith'

export default function Layout({ children, home }) {
    return (
      <div>
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
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

      <div className='columns'>
        <div className='column is-3'>
          <NavBar></NavBar>
        </div>

        <div className='column is-9'>
          <main>{children}</main>
          <Footer></Footer>
        </div>
      </div>

      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
