import { useState } from 'react'
import LogoMain from '../../assets/LogoMain'
import Burger from '../burger/Burger'
import styles from './header.module.css'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header className={styles.header}>

            <LogoMain />

            <Burger
                menuVisible={menuVisible}
                toggleMenu={toggleMenu}
            />

        </header>
    )
}