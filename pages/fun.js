import Head from 'next/head'

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
                                pictureSrc={null}>
                        <div>
                          <p className='block'>
                            Surely there&#39;s more to me than software design and game characters?
                            Of course! Here&#39;s a few facts about me and opinions I have:
                          </p>
                          <ol className='px-4'>
                            <li className='block'>
                              I do not think that the number 13 is bad luck. Black cats aren&#39;t
                              bad luck either (but they can be mischivous little gremlins!).
                            </li>

                            <li className='block'>
                              I thrive on tea. Especially bubble tea (honey or taro milk tea with
                              pearls please).
                            </li>

                            <li className='block'>
                              I read. A lot. Mostly science fiction and fantasy. Some people might
                              say I read <em>too</em> much...obviously they&#39;re wrong.
                            </li>

                            <li className='block'>
                              I&#39;m fairly certain that my first ever &#34;real&#34; game was
                              Pokémon Snap. The old one, not the new one.
                            </li>

                            <li className='block'>
                              I like to sew. There&#39;s something so satisfying when you see
                              something two dimensional on paper become three dimensional. It&#39;s
                              an engineering feat in itself. You cannot convince me otherwise.
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

                            </li>

                            <li className='block'>

                            </li>

                            <li className='block'>

                            </li>

                            <li className='block'>

                            </li>

                            <li className='block'>

                            </li>

                            <li className='block'>

                            </li>
                          </ol>
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
