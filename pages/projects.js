import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const githubicon = <FontAwesomeIcon className='has-text-black' icon={faGithubSquare} transform='grow-13' alt="GitHub Icon"/>

const websiteProjectLink = <a className='icon' href="https://github.com/GenevaS/website" aria-label="Go to GitHub repository for this website">
                         {githubicon}
                       </a>
const c3projectLink = <a className='icon' href="https://github.com/GenevaS/CAS741" aria-label="Go to GitHub repository for the Companion Cube Calculator">
                        {githubicon}
                      </a>

export default function Projects( ) {
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
                    Technical Projects
                  </h1>

                  <a className="icon pr-5" href="https://github.com/GenevaS" aria-label="Link to Geneva's GitHub">
                    {githubicon}
                  </a>
                </header>
              </div>
            </div>

            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">

                      <InfoTile pictureOnLeft
                                tileTitle="This Website!"
                                tileLink={websiteProjectLink}
                                pictureSrc='/images/websiteSnip.png'
                                pictureAlt="">
                        <p>
                          It&#39;s 2022, so I decided that a personal website was an important
                          part of making myself known in academia and industry (especially because
                          I&#39;m trained to do software engineering...). And here we are!
                        </p>
                        <p>
                          Web development is new to me, so this was also an opportunity to learn
                          new things. This is why I chose to use
                          the <a className='is-link' href='https://nextjs.org/'>Next.js React Framework</a> and <a className='is-link' href='https://bulma.io/'>Bulma CSS Framework</a> instead
                          of something like <a className='is-link' href='https://wordpress.com/'>WordPress</a> or <a className='is-link' href='https://jekyllrb.com/'>Jekyll</a>.
                        </p>
                        <p>
                          My goals are to present relevant and interesting things about myself
                          and my work, while also creating a visually appealing and responsive
                          website. I also aimed to make this webpage accessible by
                          following <a className='is-link' href='https://www.w3.org/WAI/standards-guidelines/wcag/'>WACG</a> to
                          the best of my understanding. I&#39;m sure there are accesibility improvements to make,
                          so do feel free to open a <a className='is-link' href='https://github.com/GenevaS/website/issues'>Git Issue</a> in
                          this webpage&#39;s repository.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle="Companion Cube Calculator (C&#179;)"
                                tileLink={c3projectLink}
                                pictureSrc='/images/c3project-square.png'
                                pictureAlt="">
                        <p>
                          I created this tool for my doctoral project—named GLaDOS at the
                          time, after a character in
                          the <a className='is-link' href="https://half-life.fandom.com/wiki/Portal">Portal</a> games—to
                          help me test the range of a mathematical function when the domain
                          of its variables is known. I completed it as a course project, and
                          paid particular attention to the design process and accompanying
                          documentation. I implemented C&#179; in C# because of its GUI Builder
                          tool so that the finished project would be more user-friendly (and
                          nicer to look at).
                        </p>
                      </InfoTile>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='column'>
              <div className="card">
                <header className="card-header">
                  <h1 className="card-header-title">
                    Non-Technical Projects
                  </h1>
                </header>
              </div>
            </div>
            <div className='column'>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">

                      <InfoTile tileTitle="GradFlix"
                                pictureSrc={null}>
                        <p>

                        </p>
                      </InfoTile>

                      <InfoTile tileTitle="Three Minute Thesis (3MT)"
                                pictureSrc={null}
                                lighter>
                        <p>

                        </p>
                      </InfoTile>

                      <InfoTile tileTitle="G-ScalE Logos and Business Cards"
                                pictureSrc={null}>
                        <div className='is-flex is-flex-direction-column'>
                          <p>
                            When we were discussing how to best market the work we do at G-ScalE, my
                            supervisor, lab mates, and I, decided that having a logo was a good idea.
                            We could use it on our presentations, and to visually distinguish ourselves
                            online. You can see some of this work in the wild
                            on <a className="is-link" href="https://twitter.com/lab_scale">G-ScalE&#39;s Twitter page</a>.
                            We also decided to make some business cards to give out at meetings and
                            conferences.
                          </p>
                          <p>
                            This was a fun project. It let me practice my visual design skills,
                            incorporate feedback from other members of the lab, and ensure that certain
                            pieces could scale well if its size changed on a webpage.
                          </p>

                          <div className='is-flex is-justify-content-space-evenly is-flex-wrap-wrap
                                          mt-4'>
                            <Image
                              priority
                              src="/images/gscale_businesscard_front.png"
                              width={150}
                              height={294}
                              className="py-1"
                              alt="">
                            </Image>

                            <Image
                              priority
                              src="/images/gscale_businesscard_Carette.png"
                              width={150}
                              height={294}
                              className="py-1"
                              alt="">
                            </Image>

                            <Image
                              priority
                              src="/images/gscale_businesscard_back_Geneva.png"
                              width={150}
                              height={294}
                              className="py-1"
                              alt="">
                            </Image>

                            <Image
                              priority
                              src="/images/gscale_businesscard_back_Sasha.png"
                              width={150}
                              height={294}
                              className="py-1"
                              alt="">
                            </Image>
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
