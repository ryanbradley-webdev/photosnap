import HeroMobile from '../../assets/mobile-images/create-and-share.jpg'
import BeautifulStoriesMobile from '../../assets/mobile-images/beautiful-stories.jpg'
import EveryoneMobile from '../../assets/mobile-images/designed-for-everyone.jpg'
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

            <section
                className={styles.stories}
            >

                <img
                    srcSet={`${BeautifulStoriesMobile}`}
                />

                <div>

                    <h2>
                        BEAUTIFUL STORIES EVERY TIME
                    </h2>

                    <p>
                        We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
                    </p>

                    <Button
                        variant='arrow-black'
                    >
                        VIEW THE STORIES
                    </Button>

                </div>

            </section>

            <section
                className={styles.stories}
            >

                <img
                    srcSet={`${EveryoneMobile}`}
                />

                <div>

                    <h2>
                        DESIGNED FOR EVERYONE
                    </h2>

                    <p>
                        Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses, you name it.
                    </p>

                    <Button
                        variant='arrow-black'
                    >
                        VIEW THE STORIES
                    </Button>

                </div>

            </section>

        </>
    )
}