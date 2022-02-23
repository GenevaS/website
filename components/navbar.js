import Link from 'next/link'

function NavBar() {
	return (
        <aside className="menu">
            <ul className="menu-list">
                <li>
                    <Link href="/">
                        <a className="is-active">Home</a>
                    </Link>
                </li>

                <li><a href="publications">Projects & Publications</a></li>

                <li><a href="teaching">Teaching & Talks</a></li>

                <li><a href="fun">Just For Fun</a></li>
            </ul>

            <button className="button py-5 is-family-code has-text-grey-dark has-background-white">
                    Résumé:<br/> Download!
            </button>
        </aside>
	)
}
export default NavBar
