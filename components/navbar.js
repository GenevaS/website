import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

function NavBar() {
	return (
        <aside className="menu has-text-centered has-background-primary">
            <div className='columns is-flex-direction-column'>

                <div className='column' aria-hidden='true'>

                </div>

                <div className='column'>
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

                <div className={utilStyles.withstickyfoot}>
                <div className='column is-flex is-flex-grow-1' aria-hidden='true'></div>

                </div>
            </div>

        </aside>
	)
}
export default NavBar
