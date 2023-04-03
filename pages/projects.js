/* ---------------------------------------------------------------
 * PROJECTS (Content and Layout)
 * ---------------------------------------------------------------
 */

import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import InfoTile from '../components/infotile'
import imgLoader from "../lib/imageloader"

import gscaleCard from "../public/images/gscale_businesscard_front.png"
import genevaCard from "../public/images/gscale_businesscard_back_Geneva.png"
import sashaCard from "../public/images/gscale_businesscard_back_Sasha.png"
import caretteCard from "../public/images/gscale_businesscard_Carette.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faFileZipper } from '@fortawesome/free-solid-svg-icons'


const githubicon = <FontAwesomeIcon className='has-text-black' icon={faGithubSquare} transform='grow-13' alt="GitHub Icon"/>
const zipicon = <FontAwesomeIcon className='has-text-black' icon={faFileZipper} transform='grow-7' alt="ZIP File Icon"/>


const websiteProjectLink = <a className='icon'
                              href="https://github.com/GenevaS/website"
                              target="_blank" rel="noopener noreferrer"
                              aria-label="Go to GitHub repository for this website">
                         {githubicon}
                       </a>
const c3projectLink = <a className='icon'
                         href="https://github.com/GenevaS/CAS741"
                         target="_blank" rel="noopener noreferrer"
                         aria-label="Go to GitHub repository for the Companion Cube Calculator">
                        {githubicon}
                      </a>

const emgineprojectLink = <a className='icon'
                         href="https://github.com/GenevaS/EMgine"
                         target="_blank" rel="noopener noreferrer"
                         aria-label="Go to GitHub repository for the EMgine Project">
                        {githubicon}
                      </a>

const skyrimmodprojectLink = <a className='icon'
                         href="https://macsphere.mcmaster.ca/bitstream/11375/21369/3/Smith_Geneva_M_2017April_MAScSoftwareEngineering_GLaDOS.zip"
                         target="_blank" rel="noopener noreferrer"
                         aria-label="Get ZIP file for the Skyrim Mod from MacSphere">
                        {zipicon}
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

                  <a className="icon pr-5"
                     href="https://github.com/GenevaS"
                     target="_blank" rel="noopener noreferrer"
                     aria-label="Link to Geneva's GitHub">
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

                    <InfoTile tileTitle="EMgine"
                                tileLink={emgineprojectLink}
                                pictureSrc={null}
                                lighter>
                        <p>
                          .
                        </p>
                      </InfoTile>

                      <InfoTile pictureOnLeft
                                tileTitle="This Website!"
                                tileLink={websiteProjectLink}
                                pictureSrc={null}
                                lighter>
                        <p>
                          It&#39;s 2022, so I decided that a personal website was an important
                          part of making myself known in academia and industry (especially because
                          I&#39;m trained to do software engineering...). And here we are!
                        </p>
                        <p>
                          Web development is new to me, so this was also an opportunity to learn
                          new things. This is why I chose to use
                          the <a className='is-link'
                                 href='https://nextjs.org/'
                                 target="_blank" rel="noopener noreferrer">Next.js React Framework</a> and <a className='is-link'
                                                                                                              href='https://bulma.io/'
                                                                                                              target="_blank" rel="noopener noreferrer">Bulma CSS
                          Framework</a> instead of something like <a className='is-link'
                                                                     href='https://wordpress.com/'
                                                                     target="_blank" rel="noopener noreferrer">WordPress</a> or <a className='is-link'
                                                                                                                                   href='https://jekyllrb.com/'
                                                                                                                                   target="_blank" rel="noopener noreferrer">Jekyll</a>.
                        </p>
                        <p>
                          My goals are to present relevant and interesting things about myself
                          and my work, while also <span className='has-text-weight-medium'>creating a visually appealing and responsive
                          website</span>. I also aimed to make this webpage <span className='has-text-weight-medium'>accessible</span> by
                          following <a className='is-link'
                                       href='https://www.w3.org/WAI/standards-guidelines/wcag/'
                                       target="_blank" rel="noopener noreferrer">WACG</a> to
                          the best of my understanding. I&#39;m sure there are accesibility improvements to make,
                          so do feel free to open a <a className='is-link'
                                                       href='https://github.com/GenevaS/website/issues'
                                                       target="_blank" rel="noopener noreferrer">Git Issue</a> in
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
                          the <a className='is-link'
                                 href="https://half-life.fandom.com/wiki/Portal"
                                 target="_blank" rel="noopener noreferrer">Portal</a> games—to
                          help me test the range of a mathematical function when the domain
                          of its variables is known. I completed it as a course project, paying
                          particular attention to the <span className='has-text-weight-medium'>design process</span> and
                          accompanying <span className='has-text-weight-medium'>documentation</span>. I implemented C&#179;
                          in <span className='has-text-weight-medium'>C#</span> because of its GUI Builder tool so that the
                          finished project would be more user-friendly (and nicer to look at).
                        </p>
                      </InfoTile>

                      <InfoTile tileTitle="Skyrim Mod"
                                tileLink={skyrimmodprojectLink}
                                pictureSrc={null}
                                lighter>
                        <p>
                          .
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

                      <InfoTile tileTitle={
                          <p className='has-text-weight-medium px-3'>
                            G-ScalE Logos and Business Cards
                            <br></br>
                            <i>G-ScalE Lab, McMaster University</i>
                          </p>
                      }
                      tileLink={
                        <p className='has-text-weight-medium px-3'>
                          2018
                        </p>
                      }
                              pictureSrc={null}
                              lighter>
                        <p>
                          When we were discussing how to best <span className='has-text-weight-medium'>market the work we do</span> at
                          the <a className='is-link'
                                 href='https://gscale.cas.mcmaster.ca/'
                                 target="_blank" rel="noopener noreferrer">Gaming Scalability Environment (G-ScalE) lab</a>,
                          my supervisor, lab mates, and I decided that having a <span className='has-text-weight-medium'>logo</span> was
                          a good idea. We could put it on our presentation slides, and visually distinguish ourselves online. You can
                          see some of this work in the wild
                          on <a className="is-link"
                                href="https://twitter.com/lab_scale"
                                target="_blank" rel="noopener noreferrer">G-ScalE&#39;s Twitter page</a>,
                          and in the footer of this page next to the link to my profile on the G-ScalE website.
                          We also decided to make some business cards to give out at meetings and
                          conferences.
                        </p>
                        <p>
                          This was a fun project. It let me practice
                          my <span className='has-text-weight-medium'>visual design and Photoshop skills</span>, <span className='has-text-weight-medium'>incorporate
                          feedback</span>  from other members of the lab, and
                          ensure that <span className='has-text-weight-medium'>certain
                          pieces could scale well</span> if its size changed on a webpage.
                        </p>

                        <div className='is-flex is-justify-content-space-evenly is-flex-wrap-wrap
                                        is-full-width
                                        mt-4'>
                          <Image
                            priority
                            loader={imgLoader}
                            src={gscaleCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>

                          <Image
                            priority
                            loader={imgLoader}
                            src={caretteCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>

                          <Image
                            priority
                            loader={imgLoader}
                            src={genevaCard}
                            width={150}
                            height={294}
                            className="py-1"
                            alt="">
                          </Image>

                          <Image
                            priority
                            loader={imgLoader}
                            src={sashaCard}
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
