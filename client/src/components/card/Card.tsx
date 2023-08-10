import { Link } from 'react-router-dom'
import Button from '../button/Button'
import styles from './card.module.css'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    author: string
    link: string
    image: string
}

export default function Card({
    title,
    author,
    link,
    image,
    ...props
}: CardProps) {
    return (
        <Link
            to={link}
        >

            <div
                className={styles.card}
                {...props}
                style={{
                    backgroundImage: `url(${image})`
                }}
            >

                <h3>
                    {title}
                </h3>

                <p>
                    by&nbsp;{author}
                </p>

                <hr />

                <Button
                    variant='arrow-white'
                >
                    READ STORY
                </Button>

            </div>

        </Link>
    )
}