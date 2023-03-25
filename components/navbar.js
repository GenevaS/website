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

const projects = "Projects"
const projectAddress = "/projects";

const teaching = "Teaching Experience";
const teachAddress = "/teaching";

const awards = "Awards";
const awardsAddress = "/awards";

const community = "Community Engagement";
const communityAddress = "/community";

const industry = "Industry Experience";
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

            {IsActiveLink(publications, pubAddress)}

            {IsActiveLink(projects, projectAddress)}

            {IsActiveLink(teaching, teachAddress)}

            {IsActiveLink(awards, awardsAddress)}

            {IsActiveLink(community, communityAddress)}

            {IsActiveLink(industry, industryAddress)}

            {IsActiveLink(funStuff, funAddress)}

            {/* <div className='navbar-item is-justify-content-center'>
                <Link href="/assets/GMSmith_Resume_Web.pdf">
                    <a download target="_blank" rel="noopener noreferrer" className='button downloadbutton my-5' tabIndex={0}>
                        Résumé:<br/> Download!
                    </a>
                </Link>
            </div> */}
        </div>
	)
}
export default NavBar
