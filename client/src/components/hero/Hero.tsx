import { ReactNode } from 'react'
import styles from './hero.module.css'

export default function Hero({
    children
}: {
    children: ReactNode
}) {
    return (
        <section
            className={styles.hero}
        >

            {children}

        </section>
    )
}