import HeroMobile from '../../assets/mobile-images/create-and-share.jpg'
import Button from '../../components/button/Button'
import styles from './home.module.css'

export default function Home() {
    return (
        <>
            
            <section
                className={styles.hero}
            >

                <img
                    srcSet={`${HeroMobile}`}
                />

                <div>

                    <h1>
                        CREATE AND SHARE YOUR PHOTO STORIES.
                    </h1>

                    <p>
                        Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
                    </p>

                    <Button
                        variant='arrow-white'
                    >
                        GET AN INVITE
                    </Button>

                </div>

            </section>

        </>
    )
}