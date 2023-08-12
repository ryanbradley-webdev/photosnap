import Hero from "../../components/hero/Hero"
import PricingHero from '../../assets/mobile-images/pricing.jpg'

export default function Pricing() {
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
        
        </>
    )
}