/* ---------------------------------------------------------------
 * PAGE FOOTER (Content and Layout)
 * ---------------------------------------------------------------
 */

import Image from 'next/image'

import imgLoader from "../lib/imageloader"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// Contact Information
const email = <a className='has-text-weight-medium has-text-grey-lighter' href="mailto:smithgm@mcmaster.ca">smithgm@mcmaster.ca</a>
const linkedin = <a className='has-text-weight-medium has-text-grey-lighter'
                    href="https://www.linkedin.com/in/genevamsmith/"
                    target="_blank" rel="noopener noreferrer">Geneva Smith@LinkedIn (ca.linkedin.com/in/genevamsmith)</a>
const gscaleProfile = <a className='has-text-weight-medium has-text-grey-lighter'
                         href="https://gscale.cas.mcmaster.ca/author/geneva-smith"
                         target="_blank" rel="noopener noreferrer">G-ScalE Lab Profile (https://gscale.cas.mcmaster.ca/author/geneva-smith)</a>
const office = <a className='has-text-weight-medium has-text-grey-lighter'
                  href="https://goo.gl/maps/5xhYKyw8hpYTJdp5A"
                  target="_blank" rel="noopener noreferrer"> McMaster University Information Technology Building (ITB), Room 207</a>

// Icons
const emailIcon = <FontAwesomeIcon icon={faEnvelope} alt=""/>
const linkedInIcon = <FontAwesomeIcon icon={faLinkedinIn} alt=""/>
const gscaleIcon = <Image
              priority
              loader={imgLoader}
              src="/Vector_GScalE_Logo_Icon_White.svg"
              layout='fixed'
              height={15}
              width={26}
              alt=""
              aria-hidden='true'
            />
const locationIcon = <FontAwesomeIcon icon={faLocationDot} alt=""/>

// Footer Function
function Footer() {
	return (
    <footer className='footer
                       is-flex is-flex-direction-column
                       is-justify-content-space-between
                       mt-5 has-text-centered
                       has-text-grey-lighter has-background-grey-dark'>
      <div>
        <h1 className='subtitle has-text-weight-medium has-text-grey-lighter'>Contact Me</h1>
        {emailIcon} <i>{email}</i>
        <br></br>
        {linkedInIcon} <i>{linkedin}</i>
        <br></br>
        {gscaleIcon} <i>{gscaleProfile}</i>
        <br></br>
        {locationIcon} <i>{office}</i>
      </div>

      <div className='pt-6 has-text-grey-lighter'>
        <span className='is-size-7 has-text-weight-medium'>Last Updated May 2022</span>
      </div>
    </footer>
	)
}
export default Footer
