import { Link } from 'react-router-dom'
import styles from './navMenu.module.css'
import Button from '../button/Button'

export default function NavMenu({
    menuVisible,
    toggleMenu
}: {
    menuVisible: boolean
    toggleMenu: () => void
}) {
    return (
        <nav
            className={styles.nav}
            aria-hidden={!menuVisible}
        >

            <div
                className={styles.links}
            >

                <Link
                    to='/stories'
                    onClick={toggleMenu}
                >
                    STORIES
                </Link>

                <Link
                    to='/features'
                    onClick={toggleMenu}
                >
                    FEATURES
                </Link>

                <Link
                    to='/pricing'
                    onClick={toggleMenu}
                >
                    PRICING
                </Link>

            </div>

            <Button
                variant='black'
            >
                GET AN INVITE
            </Button>

        </nav>
    )
}