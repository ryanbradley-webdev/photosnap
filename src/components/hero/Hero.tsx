import { ReactNode } from 'react'
import styles from './hero.module.css'

export default function Hero({
    home,
    children
}: {
    home?: boolean
    children: ReactNode
}) {
    return (
        <section
            className={`${styles.hero} ${home ? styles.home : ''}`}
        >

            {children}

        </section>
    )
}