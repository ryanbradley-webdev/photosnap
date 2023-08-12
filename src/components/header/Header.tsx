import { useState } from 'react'
import LogoMain from '../../assets/LogoMain'
import Burger from '../burger/Burger'
import styles from './header.module.css'
import NavMenu from '../navMenu/NavMenu'
import { Link } from 'react-router-dom'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header className={styles.header}>

            <Link
                to='/'
            >

                <LogoMain />

            </Link>

            <Burger
                menuVisible={menuVisible}
                toggleMenu={toggleMenu}
            />

            <NavMenu
                menuVisible={menuVisible}
                toggleMenu={toggleMenu}
            />

        </header>
    )
}