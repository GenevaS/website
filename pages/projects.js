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
                                pictureSrc={null}>
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
                                pictureSrc={null}
                                lighter>
                        <p>
                          I created this tool for my doctoral project—named GLaDOS at the
                          time, after a character in
                          the <a className='is-link' href="https://half-life.fandom.com/wiki/Portal">Portal</a> games—to
                          help me test the range of a mathematical function when the domain
                          of its variables is known. I completed it as a course project, paying
                          particular attention to the design process and accompanying
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

                      <div className='is-flex is-flex-grow-1 is-flex-direction-row
                                      is-full-width
                                      is-justify-content-center is-align-items-center'>
                        <hr className='is-width-20-percent has-background-grey-light' />
                        <h3 className='title is-5 m-2'>2022</h3>
                        <hr className='is-width-20-percent has-background-grey-light' />
                      </div>

                      <InfoTile tileTitle="GradFlix"
                                pictureSrc={null}>
                        <p>
                          This <a className="is-link" href='https://gs.mcmaster.ca/current-students/resources/gradflix-video-competition/'>graduate student video competition</a> was
                          for explaning my research to a non-technical audience. In
                          one minute or less. That&#39;s not a lot of time to cover several years of
                          work! Fortunately, I could get creative and pair what I was saying to
                          something visual and active.
                        </p>
                        <p>
                          Finish me
                        </p>
                      </InfoTile>

                      <div className='is-flex is-flex-grow-1 is-flex-direction-row
                                      is-full-width
                                      is-justify-content-center is-align-items-center'>
                        <hr className='is-width-20-percent has-background-grey-light' />
                        <h3 className='title is-5 m-2'>2019</h3>
                        <hr className='is-width-20-percent has-background-grey-light' />
                      </div>

                      <InfoTile tileTitle="Three Minute Thesis (3MT)"
                                pictureSrc={null}
                                lighter>
                        <p>
                            I
                            had <a className="is-link" href='https://gs.mcmaster.ca/current-students/resources/three-minute-thesis/'>three minutes and one static slide</a> to
                            convey what I&#39;ve been working on for my Ph.D. I had to communicate the
                            problem and what I was doing about it to a panel of judges that were not
                            familiar with my work or field. Needless to say, it was a challenge (and
                            public speaking is one of my least favourite things to do).
                        </p>
                        <p>
                          I did it though, and am quite pleased with how I did. Many others who know me
                          were surprised that I could speak that loudly. I was placed third in my
                          department, but did not place in the faculty or university-wide competitions.
                          However, I captured the attention of another student who came to work in our lab
                          the following summer. They claim that it was my 3MT that interested them in it,
                          and I can&#39;t think of a higher form of acclaim.
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle="First Ubisoft Future Women in Games Mentorship"
                                pictureSrc={null}>
                        <p>
                          I admire many of Ubisoft&#39;s games, so naturally I jumped at the chance to
                          participate in
                          their <a className="is-link" href='https://toronto.ubisoft.com/ubisoft-future-women-in-games-mentorship-winners/'>Game Design Challenge</a>.
                          Centering on the theme &#34;my morning routine&#34;, I focused on a challenge that I face
                          almost daily: escaping my apartment without one of my adorable cats tearing a hole in my
                          stockings.
                        </p>
                        <p>
                          I settled on a horror-style stealth game comparable
                          to <a className="is-link" href='https://amnesiagame.com/#main'>Frictional Games&#39; Amnesia: The Dark Descent</a> and <a className="is-link" href='https://www.blooberteam.com/layers-of-fear'>Bloober Team&#39;s Layers of Fear</a>.
                          I decided to play with the idea of feline spirits that are either out to get you, or
                          will (maybe) help you. I submitted a successful one-page pitch describing a the concept and plans
                          for prototyping and testing it. Next, I created a Design Solution Presentation, outlining the
                          intended player experience and success criteria, my inspirations for the design, the game feature
                          itself, and how I would build a prototype in five weeks. Unfortunately, I was not invited to
                          continue past this stage. Still, I am very pleased with the ideas I created for this and I am
                          grateful for the opportunity to work on my game design skills.
                        </p>
                      </InfoTile>

                      <div className='is-flex is-flex-grow-1 is-flex-direction-row
                                      is-full-width
                                      is-justify-content-center is-align-items-center'>
                        <hr className='is-width-20-percent has-background-grey-light' />
                        <h3 className='title is-5 m-2'>2018</h3>
                        <hr className='is-width-20-percent has-background-grey-light' />
                      </div>
                      <InfoTile tileTitle="G-ScalE Logos and Business Cards"
                              pictureSrc={null}
                              lighter>
                        <p>
                          When we were discussing how to best market the work we do at G-ScalE, my
                          supervisor, lab mates, and I decided that having a logo was a good idea.
                          We could put it on our presentation slides, and visually distinguish
                          ourselves online. You can see some of this work in the wild
                          on <a className="is-link" href="https://twitter.com/lab_scale">G-ScalE&#39;s Twitter page</a>,
                          and in the footer of this page next to the link to my profile on the G-ScalE website.
                          We also decided to make some business cards to give out at meetings and
                          conferences.
                        </p>
                        <p>
                          This was a fun project. It let me practice my visual design skills,
                          incorporate feedback from other members of the lab, and ensure that certain
                          pieces could scale well if its size changed on a webpage.
                        </p>

                        <div className='is-flex is-justify-content-space-evenly is-flex-wrap-wrap
                                        is-full-width
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
