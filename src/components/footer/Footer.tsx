import { Link } from 'react-router-dom'
import Facebook from '../../assets/Facebook'
import Instagram from '../../assets/Instagram'
import LogoMain from '../../assets/LogoMain'
import Pinterest from '../../assets/Pinterest'
import Twitter from '../../assets/Twitter'
import YouTube from '../../assets/YouTube'
import styles from './footer.module.css'
import Button from '../button/Button'

export default function Footer() {
    return (
        <footer
            className={styles.footer}
        >

            <LogoMain />

            <div
                className={styles.socials}
            >

                <Facebook />

                <YouTube />

                <Twitter />

                <Pinterest />

                <Instagram />

            </div>

            <div
                className={styles.links}
            >

                <Link
                    to='/'
                >
                    HOME
                </Link>

                <Link
                    to='/stories'
                >
                    STORIES
                </Link>

                <Link
                    to='/features'
                >
                    FEATURES
                </Link>

                <Link
                    to='/pricing'
                >
                    PRICING
                </Link>

            </div>

            <div>

                <Button
                    variant='arrow-white'
                >
                    GET AN INVITE
                </Button>

                <p>
                    Copyright 2019. All Rights Reserved.
                </p>

            </div>

        </footer>
    )
}