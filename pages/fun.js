/* ---------------------------------------------------------------
 * FUN FACTS ABOUT ME (Content and Layout)
 * ---------------------------------------------------------------
 * Why not?
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'

export default function Fun( ) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className='is-full-width pt-6'>
          <div className='columns is-flex-direction-column px-6'>
            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">

                      <InfoTile tileTitle="13 Random Things About Me"
                                pictureSrc={null}
                                lighter>
                        <div>
                          <p className='block'>
                            Surely there&#39;s more to me than software design and game characters?
                            Of course! Here&#39;s a few facts about me and my opinions:
                          </p>
                          <ol className='px-4'>
                            <li className='block'>
                              Why, yes! Purple <em>is</em> my favourite colour. How did you know?
                            </li>

                            <li className='block'>
                              I thrive on tea. Especially bubble tea (with pearls please).
                            </li>

                            <li className='block'>
                              I read. A lot. Mostly science fiction and fantasy. Definitely folk and
                              fairy tales. Some people might say I read <em>too</em> much...obviously
                              they&#39;re wrong and should read more.
                            </li>

                            <li className='block'>
                              I love world mythology. It&#39;s a fun way to learn about different
                              people and perspectives. I have a particular weakness for Egyptian
                              mythology.
                            </li>

                            <li className='block'>
                              I&#39;m fairly certain that my first ever &#34;real&#34; game was
                              Pokémon Snap (the old one, not the new one).
                            </li>

                            <li className='block'>
                              I like to sew. There&#39;s something so satisfying when you see
                              a two dimensional drawing become three dimensional. It&#39;s an
                              engineering feat in itself. You cannot convince me otherwise.
                            </li>

                            <li className='block'>
                              Some of my friends refuse to play Mario Kart 64 with me. They think
                              I&#39;m cheating. I don&#39;t even know <em>how</em> to cheat.
                            </li>

                            <li className='block'>
                              I think that the potato is one of the best foods in the
                              world. <a className="is-link" href='https://en.wikipedia.org/wiki/Axomamma'>The Incan Empire agrees</a>.
                            </li>

                            <li className='block'>
                              Halloween is the best holiday. Who can argue with dressing in fun clothes and eating
                              snacks all night? And then there&#39;s the pumpkins, ghosts, fall leaves, cool
                              breeze...
                            </li>

                            <li className='block'>
                              Winter is the best season. Listen: I know it&#39;s cold. But it&#39;s much easier to
                              put on a sweater than to try and figure out how to live in 25°C+ weather...Plus, the
                              snow is pretty.
                            </li>

                            <li className='block'>
                              Even though I love winter, I cannot deny that I also love flowers and greenery. I have
                              a garden all planned out for when I find the right spot. In the meantime, I have potted
                              plants that I take care of indoors.
                            </li>

                            <li className='block'>
                              I&#39;m always listening to music. My playlists are pretty eclectic. I can go from <a className="is-link" href='https://porterrobinson.com/'>Porter Robinson</a>,
                              to <a className="is-link" href='https://www.pinkspage.com/'>P!nk</a>,
                              to <a className="is-link" href='http://en.tchaikovsky-research.net/pages/Main_Page'>Tchikovsky</a> in as many songs.
                            </li>

                            <li className='block'>
                              I do not think that the number 13 is bad luck. Black cats aren&#39;t
                              bad luck either, but they can be mischivous little gremlins! I mean,
                              look at the cuties:
                            </li>
                          </ol>
                          <div className='is-flex is-justify-content-center'>
                            <Image
                                priority
                                src="/images/salem_xena.jpg"
                                height={200}
                                width={200}
                                className="is-rounded is-square"
                                alt="A picture of my cats, Salem and Xena"
                              />
                          </div>
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
