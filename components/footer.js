import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {
	return (
    <footer className='footer mt-6 has-text-light has-background-grey-dark'>
      <div className='has-text-centered'>
            <h3>Contact Me</h3>

            <address>
            <FontAwesomeIcon icon={faEnvelope} alt="Mail Envelope Icon"/> <a href="mailto:smithgm@mcmaster.ca">smithgm@mcmaster.ca</a>
            <br></br>
            <FontAwesomeIcon icon={faLinkedinIn} alt="LinkedIn Logo Icon"/> <a href="https://www.linkedin.com/in/genevamsmith/">Geneva Smith@LinkedIn</a> (ca.linkedin.com/in/genevamsmith)
            <br></br>
            <Image
              priority
              src="/gs_tiny.svg"
              layout='fixed'
              height={15}
              width={26}
              alt="GScalE Icon"
            /> <a href="https://gscale.cas.mcmaster.ca/author/geneva-smith">G-ScalE Lab Profile</a> (https://gscale.cas.mcmaster.ca/author/geneva-smith)
            <br></br>
            <FontAwesomeIcon icon={faLocationDot} alt="Location Dot Icon"/>
              McMaster University <a href="https://goo.gl/maps/5xhYKyw8hpYTJdp5A">Information Technology Building (ITB)</a>
            , Room 207
            </address>
        </div>
    </footer>
	)
}
export default Footer
