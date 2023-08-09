import { Link } from 'react-router-dom'
import styles from './navMenu.module.css'

export default function NavMenu({
    menuVisible
}: {
    menuVisible: boolean
}) {
    return (
        <nav
            className={styles.nav}
            aria-hidden={!menuVisible}
        >

            <div>

                <Link to='/stories'>STORIES</Link>
                <Link to='/features'>FEATURES</Link>
                <Link to='/pricing'>PRICING</Link>

            </div>



        </nav>
    )
}