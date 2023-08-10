import HeroMobile from '../../assets/mobile-images/create-and-share.jpg'
import BeautifulStoriesMobile from '../../assets/mobile-images/beautiful-stories.jpg'
import EveryoneMobile from '../../assets/mobile-images/designed-for-everyone.jpg'
import Button from '../../components/button/Button'
import styles from './home.module.css'
import Card from '../../components/card/Card'

import Mountains from '../../assets/sample-stories/mountains.png'
import Cityscapes from '../../assets/sample-stories/cityscapes.png'
import Voyage from '../../assets/sample-stories/18-days-voyage.png'
import Architecturals from '../../assets/sample-stories/architecturals.png'

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

            <section
                className={styles.featured_stories}
            >

                {SAMPLECARDS.map(card => (
                    <Card
                        key={crypto.randomUUID()}
                        {...card}
                    />
                ))}

            </section>

        </>
    )
}

const SAMPLECARDS = [
    {
        title: 'The Mountains',
        author: 'John Appleseed',
        link: '/',
        image: Mountains
    },
    {
        title: 'Sunset Cityscapes',
        author: 'Benjamin Cruz',
        link: '/',
        image: Cityscapes
    },
    {
        title: '18 Days Voyage',
        author: 'Alexei Borodin',
        link: '/',
        image: Voyage
    },
    {
        title: 'Architecturals',
        author: 'Samantha Brooke',
        link: '/',
        image: Architecturals
    },
]