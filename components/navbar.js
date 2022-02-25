import Link from 'next/link'

function NavBar() {
	return (
        <div className='menu has-text-centered
                        has-background-primary pt-6'>

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

            <button className='button downloadbutton mt-6'>
                Résumé:<br/> Download!
            </button>
        </div>
	)
}
export default NavBar
