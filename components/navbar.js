/* ---------------------------------------------------------------
 * NAV BAR (Content and Layout)
 * ---------------------------------------------------------------
 */

import Link from 'next/link'
import { useRouter } from 'next/router'

const home = "About Me";
const homeAddress = "/";

const publications = "Publications & Presentations";
const pubAddress = "/publications";

const projects = "Technical & Design Projects"
const projectAddress = "/projects";

const teaching = "Supervising & Teaching";
const teachAddress = "/teaching";

const awards = "Awards";
const awardsAddress = "/awards";

const community = "Community Service";
const communityAddress = "/community";

const industry = "Education & Industry Experience";
const industryAddress = "/industry";

const funStuff = "Just For Fun";
const funAddress = "/fun";

/* ---------------------------------------------------------------
 * Function: IsActiveLink
 * ---------------------------------------------------------------
 * Simple function for changing the active navbar-item based on a
 * given page with name = pagename and address=address.
 * ---------------------------------------------------------------
 */
function IsActiveLink( pagename, address ) {
    const router = useRouter();
    var item;
    // Remove trailing slashes if present before comparison if not home page
    var currentPath = router.asPath;
    if ((currentPath !== homeAddress) && currentPath.endsWith('/'))
    {
        currentPath = currentPath.slice(0, -1);
    }

    if (currentPath === address) {
        item = <Link href={address}>
                <a className='navbar-item is-justify-content-center is-active'>{pagename}</a>
               </Link>
    }
    else {
        item = <Link href={address}>
                    <a className='navbar-item is-justify-content-center'>{pagename}</a>
               </Link>
    }

    return item;
}

function NavBar(  ) {
	return (
        <div className='navbar-start is-flex-direction-column has-text-centered'>

            {IsActiveLink(home, homeAddress)}

            {IsActiveLink(teaching, teachAddress)}

            {IsActiveLink(publications, pubAddress)}
            
            {IsActiveLink(projects, projectAddress)}

            {IsActiveLink(community, communityAddress)}

            {IsActiveLink(awards, awardsAddress)}

            {IsActiveLink(industry, industryAddress)}

            {IsActiveLink(funStuff, funAddress)}

            {<div className='navbar-item is-flex-direction-column is-justify-content-center my-3'>

                <Link href="/assets/GMSmith_CV_Web.pdf">
                    <a download target="_blank" rel="noopener noreferrer" className='button downloadbutton my-2' tabIndex={0}>
                        CV:<br/> Download!
                    </a>
                </Link>

                <br></br>

                <Link href="/assets/GMSmith_Resume_Web.pdf">
                    <a download target="_blank" rel="noopener noreferrer" className='button downloadbutton my-2' tabIndex={0}>
                        Résumé:<br/> Download!
                    </a>
                </Link>
            
            </div>}
        </div>
	)
}
export default NavBar
