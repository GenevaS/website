import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {
	return (
    <footer className='footer is-flex is-justify-content-center
                       mt-6
                       has-text-grey-lighter has-background-grey-dark'>
      <div className='has-text-centered'>
            <p className='subtitle has-text-grey-lighter'>Contact Me</p>

            <address>
            <FontAwesomeIcon icon={faEnvelope} alt="Mail Envelope Icon"/> <a className='has-text-grey-lighter' href="mailto:smithgm@mcmaster.ca">smithgm@mcmaster.ca</a>
            <br></br>
            <FontAwesomeIcon icon={faLinkedinIn} alt="LinkedIn Logo Icon"/> <a className='has-text-grey-lighter' href="https://www.linkedin.com/in/genevamsmith/">Geneva Smith@LinkedIn (ca.linkedin.com/in/genevamsmith)</a>
            <br></br>
            <Image
              priority
              src="/Vector_GScalE_Logo_Icon_White.svg"
              layout='fixed'
              height={15}
              width={26}
              alt="GScalE Icon"
            /> <a className='has-text-grey-lighter' href="https://gscale.cas.mcmaster.ca/author/geneva-smith">G-ScalE Lab Profile (https://gscale.cas.mcmaster.ca/author/geneva-smith)</a>
            <br></br>
            <FontAwesomeIcon icon={faLocationDot} alt="Location Dot Icon"/>
              <a className='has-text-grey-lighter' href="https://goo.gl/maps/5xhYKyw8hpYTJdp5A"> McMaster University Information Technology Building (ITB), Room 207</a>
            </address>
        </div>
    </footer>
	)
}
export default Footer
