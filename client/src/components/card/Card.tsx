import { Link } from 'react-router-dom'
import Button from '../button/Button'
import styles from './card.module.css'
import { formatDate } from '../../lib/formatDate'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    author: string
    link: string
    date: string
    image: string
}

export default function Card({
    title,
    author,
    link,
    date,
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
                <p>
                    {formatDate(date)}
                </p>

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