import { Link } from 'react-router-dom'
import styles from './navMenu.module.css'
import Button from '../button/Button'

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

            <div
                className={styles.links}
            >

                <Link to='/stories'>STORIES</Link>
                <Link to='/features'>FEATURES</Link>
                <Link to='/pricing'>PRICING</Link>

            </div>

            <Button
                variant='black'
            >
                GET AN INVITE
            </Button>

        </nav>
    )
}