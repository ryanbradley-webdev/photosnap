import Button from '../../components/button/Button'
import { formatDate } from '../../lib/formatDate'
import styles from './stories.module.css'

export default function Featured({
    story
}: {
    story: Story
}) {
    return (
        <section
            className={styles.featured_story}
        >
            
            <img src={story.image} alt={story.title} />

            <div
                className={styles.featured_content}
            >

                <h4>
                    LAST MONTH&apos;S FEATURED STORY
                </h4>

                <h1>
                    {story.title.toUpperCase()}
                </h1>

                <div>

                    <p>
                        {formatDate(story.date)}
                    </p>

                    <p>
                        by&nbsp;{story.author}
                    </p>

                </div>

                <p>
                    The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kenutcky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
                </p>

                <Button
                    variant='arrow-white'
                >
                    READ THE STORY
                </Button>

            </div>

        </section>
    )
}