import Hero from "../../components/hero/Hero"
import PricingMobile from '../../assets/mobile-images/pricing.jpg'
import PricingTablet from '../../assets/tablet-images/pricing.jpg'
import InviteLink from "../../components/inviteLink/InviteLink"
import styles from './pricing.module.css'
import PricingCard from "../../components/pricingCard/PricingCard"
import { useState } from "react"
import Comparison from "../../components/comparison/Comparison"

export default function Pricing() {
    const [yearly, setYearly] = useState(false)
    
    return (
        <>
        
            <Hero>

                <img
                    src={PricingMobile}
                    alt="Pricing"
                />

                <img
                    src={PricingTablet}
                    alt="Pricing"
                />

                <div>

                    <h1>
                        PRICING
                    </h1>

                    <p>
                        Create your stories, Photosnap is a platform for photographers and visual storytellers. It&apos;s the simple way to create and share your photos.
                    </p>

                </div>

            </Hero>

            <section
                className={styles.pricing}
            >

                <div
                    className={styles.price_toggle}
                >

                    <h3
                        style={{
                            opacity: yearly ? '0.5' : ''
                        }}
                    >
                        Monthly
                    </h3>

                    <button
                        className={styles.input}
                        data-yearly={yearly}
                        onClick={() => setYearly(!yearly)}
                    >
                    </button>

                    <h3
                        style={{
                            opacity: yearly ? '' : '0.5'
                        }}
                    >
                        Yearly
                    </h3>

                </div>

                <div
                    className={styles.pricing_grid}
                >

                    <PricingCard
                        title='Basic'
                        monthlyPrice={19}
                        yearly={yearly}
                    >

                        <p>
                            Includes basic usage of our platform. Recommended for new and aspiring photographers.
                        </p>

                    </PricingCard>

                    <PricingCard
                        title='Pro'
                        monthlyPrice={39}
                        yearly={yearly}
                        second
                    >

                        <p>
                            More advanced features available. Recommended for photography veterans and professionals.
                        </p>

                    </PricingCard>

                    <PricingCard
                        title='Business'
                        monthlyPrice={99}
                        yearly={yearly}
                    >

                        <p>
                            Additional features available such as more detailed metrics. Recommended for business owners.
                        </p>

                    </PricingCard>

                </div>

            </section>

            <section
                className={styles.comparison_grid}
            >

                <div>

                    <h4>
                        THE FEATURES
                    </h4>

                    <div
                        className={styles.heading}
                    >

                        <h4>
                            BASIC
                        </h4>


                        <h4>
                            PRO
                        </h4>


                        <h4>
                            BUSINESS
                        </h4>

                    </div>

                </div>

                <Comparison
                    title='UNLIMITED STORY POSTING'
                    isBasic
                    isPro
                    isBusiness
                />

                <Comparison
                    title='UNLIMITED PHOTO UPLOAD'
                    isBasic
                    isPro
                    isBusiness
                />

                <Comparison
                    title='EMBEDDING CUSTOM CONTENT'
                    isPro
                    isBusiness
                />

                <Comparison
                    title='CUSTOMIZE METADATA'
                    isPro
                    isBusiness
                />

                <Comparison
                    title='ADVANCED METRICS'
                    isBusiness
                />

                <Comparison
                    title='PHOTO DOWNLOADS'
                    isBusiness
                />

                <Comparison
                    title='SEARCH ENGINE INDEXING'
                    isBusiness
                />

                <Comparison
                    title='CUSTOM ANALYTICS'
                    isBusiness
                />

            </section>

            <InviteLink />
        
        </>
    )
}