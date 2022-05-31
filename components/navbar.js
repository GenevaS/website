/* ---------------------------------------------------------------
 * NAV BAR (Content and Layout)
 * ---------------------------------------------------------------
 */

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
    if (router.asPath === address) {
        item = <a className='navbar-item is-justify-content-center is-active'  href={address}>{pagename}</a>
    }
    else {
        item = <a className='navbar-item is-justify-content-center' href={address}>{pagename}</a>
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

            <div className='navbar-item is-justify-content-center'>
                <a download href="GSmith_Resume_May2022.pdf" className='button downloadbutton mt-6 mb-5' tabIndex={0}>
                    Résumé:<br/> Download!
                </a>
            </div>
        </div>
	)
}
export default NavBar
