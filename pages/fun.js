/* ---------------------------------------------------------------
 * FUN FACTS ABOUT ME (Content and Layout)
 * ---------------------------------------------------------------
 * Why not?
 * ---------------------------------------------------------------
 */

import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'

import consolePicture from "../public/images/consoles.jpg"
import bookPicture from "../public/images/magicdarkandstrange.jpg"
import catPicture from "../public/images/salem_xena.jpg"
import plushiePicture from "../public/images/companioncube.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faGoodreads } from '@fortawesome/free-brands-svg-icons'

const instagramicon = <FontAwesomeIcon className='has-text-black' icon={faInstagramSquare} transform='grow-13' alt="Instagram Icon"/>
const goodreadsicon = <FontAwesomeIcon className='has-text-black' icon={faGoodreads} transform='grow-13' alt="GoodReads Icon"/>

const instagramLink = <a className='icon'
                         href="https://www.instagram.com/geneva.s/"
                         target="_blank" rel="noopener noreferrer"
                         aria-label="Go to Geneva's Instagram">
                         {instagramicon}
                       </a>

const goodreadsLink = <a className='icon'
                         href="https://www.goodreads.com/viatr1x"
                         target="_blank" rel="noopener noreferrer"
                         aria-label="Go to Geneva's GoodReads">
                         {goodreadsicon}
                       </a>

const bookLinks = <div className='is-flex is-flex-direction-row is-justify-content-space-between'>
                    {goodreadsLink}
                    <span className='px-1'></span>
                    {instagramLink}
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

                      <InfoTile tileTitle={
                                            <p>
                                              Player of Games
                                            </p>
                                          }
                                pictureSrc={consolePicture}
                                pictureAlt="The logos for Nintendo 64 and PlayStation"
                                pictureOnLeft
                                lighter>
                                  <p>
                                    It goes without saying that I love my games. My first love
                                    was the <a className='is-link'
                                               href='https://en.wikipedia.org/wiki/Nintendo_64'
                                               target="_blank" rel="noopener noreferrer">Nintendo
                                    64</a> and I&#39;m fairly certain that my first ever &#34;real&#34; game
                                    was <a className='is-link'
                                           href='https://www.youtube.com/watch?v=L-R2L7gEy8A'
                                           target="_blank" rel="noopener noreferrer">Pokémon
                                    Snap</a> (the old one, not the new one). I also
                                    played <em>a lot</em> of <a className='is-link'
                                                                href='https://www.youtube.com/watch?v=C6IzrGGESCw'
                                                                target="_blank" rel="noopener noreferrer">Mario
                                    Kart 64</a>, <a className='is-link'
                                                    href='https://www.youtube.com/watch?v=V7-iRU8xLfo'
                                                    target="_blank" rel="noopener noreferrer">Banjo-Tooie</a>,
                                    and <a className='is-link'
                                           href='https://www.youtube.com/watch?v=n9BewjMpmAE'
                                           target="_blank" rel="noopener noreferrer">Yoshi&#39;s Story</a>.
                                    However, it was
                                    the <a className='is-link'
                                           href='https://en.wikipedia.org/wiki/PlayStation_2'
                                           target="_blank" rel="noopener noreferrer">PlayStation
                                    2</a> that became my true love.
                                  </p>

                                  <p>
                                    My tastes have changed over the years, and some other game
                                    franchises have made it onto my favourites list:
                                  </p>

                                  <div className='content is-flex is-align-self-flex-start'>
                                    <ul>
                                      <li>
                                        <a className='is-link'
                                           href='https://www.youtube.com/watch?v=R5pYpZPws1c'
                                           target="_blank" rel="noopener noreferrer">Horizon Zero Dawn</a>
                                      </li>
                                      <li>
                                        <a className='is-link'
                                           href='https://www.youtube.com/watch?v=4JUb947RRLI'
                                           target="_blank" rel="noopener noreferrer">Shadow Hearts</a>
                                      </li>
                                      <li>
                                        <a className='is-link'
                                           href='https://www.youtube.com/watch?v=9EkrBEoXCbA'
                                           target="_blank" rel="noopener noreferrer">Final Fantasy</a>
                                      </li>
                                      <li>
                                        <a className='is-link'
                                           href='https://www.youtube.com/watch?v=u1nY_5-UrY4'
                                           target="_blank" rel="noopener noreferrer">Amnesia</a>
                                      </li>
                                      <li>
                                        <a className='is-link'
                                           href='https://www.youtube.com/watch?v=S6xY4fVvgHE'
                                           target="_blank" rel="noopener noreferrer">Layers of Fear</a>
                                      </li>
                                    </ul>
                                    <div></div>
                                  </div>
                      </InfoTile>

                      <InfoTile tileTitle="Book Wyrm (Because I have a book hoard)"
                                tileLink={bookLinks}
                                pictureSrc={bookPicture}
                                pictureAlt="The book, Magic Dark and Strange by Kelly Powell, in a flatlay"
                                lighter>
                                  <p>
                                    I read. A lot. Mostly science fiction and fantasy. Definitely folk and
                                    fairy tales. Some people might say I read <em>too</em> much...obviously
                                    they&#39;re wrong and should read more.
                                  </p>

                                  <p>
                                    I tend to gravitate towards stories with ghosts, lost cities, and mysterious
                                    happenings. Some of my favourite authors
                                    are <a className='is-link'
                                           href='https://joannaruthmeyer.com/'
                                           target="_blank" rel="noopener noreferrer">Joanna Ruth
                                    Meyer</a>, <a className='is-link'
                                                  href='http://www.lainitaylor.com/'
                                                  target="_blank" rel="noopener noreferrer">Laini
                                    Taylor</a>, <a className='is-link'
                                                   href='https://www.sheaernshaw.com/'
                                                   target="_blank" rel="noopener noreferrer">Shea
                                    Ernshaw</a>,
                                    and <a className='is-link'
                                           href='https://margaretrogerson.com/'
                                           target="_blank" rel="noopener noreferrer">Margaret
                                    Rogerson</a>.
                                  </p>

                                  <p>
                                    If you are interested, you can check
                                    out <a className='is-link'
                                           href='https://www.instagram.com/geneva.s/'
                                           target="_blank" rel="noopener noreferrer">my
                                    Instagram</a>. I occassionaly post what I&#39;ve been reading and what
                                    I think everyone should read (and the occassional cat, plant, and mourning
                                    dove).
                                  </p>
                      </InfoTile>

                      <InfoTile tileTitle="Full-Time Cat & Plant Steward"
                                pictureSrc={catPicture}
                                pictureAlt="A picture of my cats, Salem and Xena"
                                pictureOnLeft
                                lighter>
                                  <p>
                                    If my cats, Salem and Xena, ever claim to be hard done by,
                                    don&#39;t listen. They probably haven&#39;t had their fourth
                                    round of cat treats.
                                  </p>

                                  <p>
                                    I also have a small collection of house plants that I am fond
                                    of. I have a
                                    large <a className='is-link'
                                             href='https://en.wikipedia.org/wiki/Pachira_aquatica'
                                             target="_blank" rel="noopener noreferrer">money
                                    tree</a> and several smaller plants
                                    like <a className='is-link'
                                            href='https://en.wikipedia.org/wiki/Haworthiopsis_fasciata'
                                            target="_blank" rel="noopener noreferrer">hawthornia</a> and <a className='is-link'
                                                                                                            href='https://en.wikipedia.org/wiki/Dischidia_nummularia'
                                                                                                            target="_blank" rel="noopener noreferrer">string
                                    of nickels</a>.
                                  </p>
                      </InfoTile>

                      <InfoTile tileTitle={
                                            <p>
                                              Amateur Seamstress & Plushie Maker
                                            </p>
                                          }
                                pictureSrc={plushiePicture}
                                pictureAlt="The Companion Cube plushie I made"
                                lighter>
                                  <p>
                                    I like to sew. There&#39;s something so satisfying when you see
                                    a two dimensional drawing become three dimensional. It&#39;s an
                                    engineering feat in itself. You cannot convince me otherwise.
                                  </p>
                                  <p>
                                    I have made clothing, cosplays, and plushies for 10+ years. The
                                    Companion Cube is one of my favourites, based on a pattern adapted
                                    from a paper craft printable. It has a simple shape, but the
                                    details took time and patience.
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
