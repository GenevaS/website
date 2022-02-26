/* ---------------------------------------------------------------
 * NAV BAR (Content and Layout)
 * ---------------------------------------------------------------
 */

import { useRouter } from 'next/router'
import Link from 'next/link'

const home = "Home";
const homeAddress = "/";

const publications = "Projects & Publications";
const pubAddress = "/publications";

const teaching = "Teaching & Talks";
const teachAddress = "/teaching";

const funStuff = "Just For Fun";
const funAddress = "/fun";

/* ---------------------------------------------------------------
 * Function: IsActiveLink
 * ---------------------------------------------------------------
 * Simple function for changing the active nav item based on a
 * given page with name = pagename and address=address.
 * ---------------------------------------------------------------
 */
function IsActiveLink( pagename, address ) {
    const router = useRouter();
    var item;
    if (router.asPath === address) {
        item = <a className='is-active'>{pagename}</a>
    }
    else {
        item = <a>{pagename}</a>
    }

    return item;
}

function NavBar(  ) {
	return (
        <div className='menu has-text-centered'>

            <ul className="menu-list">
                <li>
                    <Link href={homeAddress}>
                        {IsActiveLink(home, homeAddress)}
                    </Link>
                </li>
                <li>
                    <Link href={pubAddress}>
                        {IsActiveLink(publications, pubAddress)}
                    </Link>
                </li>
                <li>
                    <Link href={teachAddress}>
                        {IsActiveLink(teaching, teachAddress)}
                    </Link>
                </li>
                <li>
                    <Link href={funAddress}>
                    {IsActiveLink(funStuff, funAddress)}
                    </Link>
                </li>
            </ul>

            <button className='button downloadbutton mt-6 mb-5'>
                Résumé:<br/> Download!
            </button>
        </div>
	)
}
export default NavBar
