import { Link } from 'react-router-dom'
import Facebook from '../../assets/socials/Facebook'
import Instagram from '../../assets/socials/Instagram'
import LogoMain from '../../assets/LogoMain'
import Pinterest from '../../assets/socials/Pinterest'
import Twitter from '../../assets/socials/Twitter'
import YouTube from '../../assets/socials/YouTube'
import Button from '../button/Button'
import styles from './footer.module.css'

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