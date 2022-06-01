/* ---------------------------------------------------------------
 * FUN FACTS ABOUT ME (Content and Layout)
 * ---------------------------------------------------------------
 * Why not?
 * ---------------------------------------------------------------
 */

import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faGoodreads } from '@fortawesome/free-brands-svg-icons'

const instagramicon = <FontAwesomeIcon className='has-text-black' icon={faInstagramSquare} transform='grow-13' alt="Instagram Icon"/>
const goodreadsicon = <FontAwesomeIcon className='has-text-black' icon={faGoodreads} transform='grow-13' alt="GoodReads Icon"/>

const instagramLink = <a className='icon' href="https://www.instagram.com/geneva.s/" aria-label="Go to Geneva's Instagram">
                         {instagramicon}
                       </a>

const goodreadsLink = <a className='icon' href="https://www.goodreads.com/viatr1x" aria-label="Go to Geneva's GoodReads">
                         {goodreadsicon}
                       </a>

const bookLinks = <div className='is-flex is-flex-direction-row is-justify-content-space-between'>
                    {goodreadsLink}
                    <div className='pl-1'>
                      {instagramLink}
                    </div>
                  </div>

export default function Fun( ) {
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
                    Some Other Things About Me
                  </h1>
                </header>
              </div>
            </div>

            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">

                      <InfoTile tileTitle="The Nintendo 64 Got Me Started"
                                pictureSrc={null}
                                pictureOnLeft
                                lighter>
                                  <p>
                                  I&#39;m fairly certain that my first ever &#34;real&#34; game was
                              Pokémon Snap (the old one, not the new one). Some of my friends refuse to play Mario Kart 64 with me. They think
                              I&#39;m cheating. I don&#39;t even know <em>how</em> to cheat.
                                  </p>
                      </InfoTile>

                      <InfoTile tileTitle="Book Dragon (Because I have a book hoard)"
                                tileLink={bookLinks}
                                pictureSrc="/images/magicdarkandstrange.jpg"
                                pictureAlt="An enamel pin and a stack of library books"
                                lighter>
                                  <p>
                                    I read. A lot. Mostly science fiction and fantasy. Definitely folk and
                                    fairy tales. Some people might say I read <em>too</em> much...obviously
                                    they&#39;re wrong and should read more. I am also interested in world
                                    mythology, especially Egyptian.
                                  </p>

                                  <p>
                                    I tend to gravitate towards stories with ghosts, lost cities, and mysterious
                                    happenings. Some of my favourite authors
                                    are <a className='is-link' href='https://joannaruthmeyer.com/'>Joanna Ruth
                                    Meyer</a>, <a className='is-link' href='http://www.lainitaylor.com/'>Laini
                                    Taylor</a>, <a className='is-link' href='http://www.lainitaylor.com/'>Shea
                                    Ernshaw</a>,
                                    and <a className='is-link' href='https://margaretrogerson.com/'>Margaret
                                    Rogerson</a>.
                                  </p>

                                  <p>
                                    If you are interested, you can check
                                    out <a className='is-link' href='https://www.instagram.com/geneva.s/'>my
                                    Instagram</a>. I occassionaly post what I&#39;ve been reading and what
                                    I think everyone should read (and the occassional plant and mourning
                                    dove).
                                  </p>
                      </InfoTile>

                      <InfoTile tileTitle="Animal Weakness"
                                pictureSrc="/images/salem_xena.jpg"
                                pictureAlt="A picture of my cats, Salem and Xena"
                                pictureOnLeft
                                lighter>
                                  <p>
                                    I can&#39;t help myself. They&#39;re all so cute! Salem and Xena, my cats,
                                    are mercilessly spoiled as a result.
                                  </p>

                                  <p>
                                    Rest assured that I will get excited no matter how many cats, dogs, birds,
                                    horses, cows, fish, repiles, or other non-human spieces I see in any
                                    given day.
                                  </p>
                      </InfoTile>

                      <InfoTile tileTitle="Sewing for Funsies"
                                pictureSrc="/images/companioncube.jpg"
                                pictureAlt="The Companion Cube plushie I made"
                                lighter>
                                  <p>
                                    I like to sew. There&#39;s something so satisfying when you see
                                    a two dimensional drawing become three dimensional. It&#39;s an
                                    engineering feat in itself. You cannot convince me otherwise.
                                  </p>
                                  <p>
                                    I have made clothing, cosplays, and plushies. The Companion Cube
                                    is one of my favourites. It has a simple shape, but the details
                                    took patience.
                                  </p>
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
