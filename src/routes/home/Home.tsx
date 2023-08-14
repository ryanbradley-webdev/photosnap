import HeroMobile from '../../assets/mobile-images/create-and-share.jpg'
import HeroTablet from '../../assets/tablet-images/hero.jpg'
import BeautifulStoriesMobile from '../../assets/mobile-images/beautiful-stories.jpg'
import EveryoneMobile from '../../assets/mobile-images/designed-for-everyone.jpg'
import Button from '../../components/button/Button'
import styles from './home.module.css'
import Card from '../../components/card/Card'
import Hero from '../../components/hero/Hero'
import FeaturesList from '../../components/featuresList/FeaturesList'

import { SAMPLE_STORIES } from '../../samepleData/sampleStories'

export default function Home() {
    return (
        <>
            
            <Hero
                home
            >

                <img
                    src={HeroMobile}
                    alt='Create and Share'
                />

                <img
                    src={HeroTablet}
                    alt='Create and Share'
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

            </Hero>

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

            <section
                className={styles.featured_stories}
            >

                {SAMPLE_STORIES.slice(0, 4).map(card => (
                    <Card
                        key={crypto.randomUUID()}
                        {...card}
                    />
                ))}

            </section>

            <FeaturesList
                limit
            />

        </>
    )
}