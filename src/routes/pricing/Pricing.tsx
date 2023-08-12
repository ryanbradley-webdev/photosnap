import Hero from "../../components/hero/Hero"
import PricingHero from '../../assets/mobile-images/pricing.jpg'
import InviteLink from "../../components/inviteLink/InviteLink"
import styles from './pricing.module.css'
import PricingCard from "../../components/pricingCard/PricingCard"
import { useState } from "react"

export default function Pricing() {
    const [yearly, setYearly] = useState(false)
    
    return (
        <>
        
            <Hero>

                <img
                    src={PricingHero}
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
                        monthlyPrice="19.00"
                    >

                        <p>
                            Includes basic usage of our platform. Recommended for new and aspiring photographers.
                        </p>

                    </PricingCard>

                    <PricingCard
                        title='Pro'
                        monthlyPrice="39.00"
                        second
                    >

                        <p>
                            More advanced features available. Recommended for photography veterans and professionals.
                        </p>

                    </PricingCard>

                    <PricingCard
                        title='Business'
                        monthlyPrice="99.00"
                    >

                        <p>
                            Additional features available such as more detailed metrics. Recommended for business owners.
                        </p>

                    </PricingCard>

                </div>

            </section>

            <section
                className={styles.compare}
            >



            </section>

            <InviteLink />
        
        </>
    )
}