import { ReactNode } from 'react'
import styles from './pricingCard.module.css'
import Button from '../button/Button'

export default function PricingCard({
    title,
    monthlyPrice,
    yearly,
    second,
    children
}: {
    title: string
    monthlyPrice: number
    yearly: boolean
    second?: boolean
    children: ReactNode
}) {
    return (
        <div
            className={styles.card}
        >
            <div>

                <h2>
                    {title}
                </h2>
                
                {children}

            </div>

            <div
                className={styles.price}
            >

                <h3>
                    ${monthlyPrice * (yearly ? 12 : 1)}.00
                </h3>

                <p>
                    per {yearly ? 'year' : 'month'}
                </p>

            </div>

            <Button
                variant={second ? 'white' : 'black'}
            >
                PICK PLAN
            </Button>

        </div>
    )
}