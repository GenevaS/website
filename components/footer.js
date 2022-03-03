/* ---------------------------------------------------------------
 * PAGE FOOTER (Content and Layout)
 * ---------------------------------------------------------------
 */

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// Contact Information
const email = <a className='has-text-grey-lighter' href="mailto:smithgm@mcmaster.ca">smithgm@mcmaster.ca</a>
const linkedin = <a className='has-text-grey-lighter' href="https://www.linkedin.com/in/genevamsmith/">Geneva Smith@LinkedIn (ca.linkedin.com/in/genevamsmith)</a>
const gscaleProfile = <a className='has-text-grey-lighter' href="https://gscale.cas.mcmaster.ca/author/geneva-smith">G-ScalE Lab Profile (https://gscale.cas.mcmaster.ca/author/geneva-smith)</a>
const office = <a className='has-text-grey-lighter' href="https://goo.gl/maps/5xhYKyw8hpYTJdp5A"> McMaster University Information Technology Building (ITB), Room 207</a>

// Icons
const emailIcon = <FontAwesomeIcon icon={faEnvelope} alt=""/>
const linkedInIcon = <FontAwesomeIcon icon={faLinkedinIn} alt=""/>
const gscaleIcon = <Image
              priority
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
    <footer className='footer is-flex is-justify-content-center
                       mt-4 has-text-centered
                       has-text-grey-lighter has-background-grey-dark'>
      <div>
        <h1 className='subtitle has-text-grey-lighter'>Contact Me</h1>

        {emailIcon} <i>{email}</i>
        <br></br>
        {linkedInIcon} <i>{linkedin}</i>
        <br></br>
        {gscaleIcon} <i>{gscaleProfile}</i>
        <br></br>
        {locationIcon} <i>{office}</i>
      </div>
    </footer>
	)
}
export default Footer
