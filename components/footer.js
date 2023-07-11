/* ---------------------------------------------------------------
 * PAGE FOOTER (Content and Layout)
 * ---------------------------------------------------------------
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// Contact Information
const email = <a className='has-text-weight-medium has-text-grey-lighter' href="mailto:smithgm@mcmaster.ca">smithgm@mcmaster.ca</a>
const linkedin = <a className='has-text-weight-medium has-text-grey-lighter'
                    href="https://www.linkedin.com/in/genevamsmith/"
                    target="_blank" rel="noopener noreferrer">Geneva M. Smith @LinkedIn</a>
const gscaleProfile = <a className='has-text-weight-medium has-text-grey-lighter'
                         href="https://gscale.cas.mcmaster.ca/author/geneva-smith"
                         target="_blank" rel="noopener noreferrer">Geneva Smith @G-ScalE</a>
const office = <a className='has-text-weight-medium has-text-grey-lighter'
                  href="https://goo.gl/maps/5xhYKyw8hpYTJdp5A"
                  target="_blank" rel="noopener noreferrer">Geneva&#39;s Office @McMaster</a>

// Icons
import GScaleLogo from '../public/images/Vector_GScalE_Logo_Icon_White.svg';
const emailIcon = <FontAwesomeIcon icon={faEnvelope} alt=""/>
const linkedInIcon = <FontAwesomeIcon icon={faLinkedinIn} alt=""/>
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
        <div><span className='icon'>{emailIcon}</span> <i>{email}</i></div>
        <div><span className='icon'>{linkedInIcon}</span> <i>{linkedin}</i></div>
        <div><span className='icon'><GScaleLogo /></span> <i>{gscaleProfile}</i></div>
        <div><span className='icon'>{locationIcon}</span> <i>{office}</i></div>
      </div>

      <div className='pt-6 has-text-grey-lighter'>
        <span className='is-size-7 has-text-weight-medium'>Last Updated July 2023</span>
      </div>
    </footer>
	)
}
export default Footer
