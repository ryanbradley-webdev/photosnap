import { ReactNode } from 'react'
import styles from './pricingCard.module.css'
import Button from '../button/Button'

export default function PricingCard({
    title,
    monthlyPrice,
    second,
    children
}: {
    title: string
    monthlyPrice: string
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

            <div>

                <h3>
                    ${monthlyPrice}
                </h3>

                <p>
                    per month
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