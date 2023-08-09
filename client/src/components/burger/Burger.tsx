import CloseIcon from "../../assets/CloseIcon"
import MenuIcon from "../../assets/MenuIcon"
import styles from './burger.module.css'

export default function Burger({
    menuVisible,
    toggleMenu
}: {
    menuVisible: boolean
    toggleMenu: () => void
}) {
    return (
        <button
            className={styles.burger}
            onClick={toggleMenu}
        >

            <MenuIcon
                menuVisible={menuVisible}
            />

            <CloseIcon
                menuVisible={menuVisible}
            />

        </button>
    )
}