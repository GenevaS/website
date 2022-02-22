import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {
	return (
		<div>
            <h4>Contact Me</h4>

            <address>
            <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:smithgm@mcmaster.ca">smithgm@mcmaster.ca</a>
            <br></br>
            <FontAwesomeIcon icon={faLinkedinIn} /> <a href="https://www.linkedin.com/in/genevamsmith/">Geneva Smith@LinkedIn</a> (ca.linkedin.com/in/genevamsmith)
            <br></br>
            <Image
              priority
              src="/gs_tiny.svg"
              layout='fixed'
              height={15}
              width={26}
            /> <a href="https://gscale.cas.mcmaster.ca/author/geneva-smith">G-ScalE Lab Profile</a> (https://gscale.cas.mcmaster.ca/author/geneva-smith)
            <br></br>
            <FontAwesomeIcon icon={faLocationDot} /> McMaster University <a href="https://goo.gl/maps/5xhYKyw8hpYTJdp5A">Information Technology Building (ITB)</a>
            , Room 207
            </address>
        </div>
	)
}
export default Footer
