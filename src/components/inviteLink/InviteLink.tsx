import { Link } from 'react-router-dom'
import Button from '../button/Button'
import styles from './inviteLink.module.css'

export default function InviteLink() {
    return (
        <Link
            to='/'
            className={styles.invite}
        >
            
            <h2>
                WE&apos;RE IN BETA. GET YOUR INVITE TODAY!
            </h2>

            <Button
                variant='arrow-white'
            >
                GET AN INVITE
            </Button>

        </Link>
    )
}