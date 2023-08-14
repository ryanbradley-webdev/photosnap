import CheckIcon from '../../assets/CheckIcon'
import styles from './comparison.module.css'

export default function Comparison({
    title,
    isBasic,
    isPro,
    isBusiness
}: {
    title: string
    isBasic?: boolean
    isPro?: boolean
    isBusiness?: boolean
}) {
    return (
        <div
            className={styles.comparison}
        >
            
            <h2>
                {title}
            </h2>

            <div
                className={styles.title_grid}
            >

                <h5>
                    BASIC
                </h5>

                <h5>
                    PRO
                </h5>

                <h5>
                    BUSINESS
                </h5>

            </div>

            <div
                className={styles.check_grid}
            >

                <CheckIcon
                    active={isBasic}
                />

                <CheckIcon
                    active={isPro}
                />

                <CheckIcon
                    active={isBusiness}
                />

            </div>

        </div>
    )
}