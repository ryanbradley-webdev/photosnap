import Hero from "../../components/hero/Hero"
import FeaturesHero from '../../assets/mobile-images/features.jpg'
import FeaturesList from "../../components/featuresList/FeaturesList"

export default function Features() {
    return (
        <>
        
            <Hero>

                <img
                    src={FeaturesHero}
                    alt="Features"
                />

                <div>

                    <h1>
                        FEATURES
                    </h1>

                    <p>
                        We make sure all of our features are designed to be loved by every aspiring and even professional photographers who want to share their stories.
                    </p>

                </div>

            </Hero>

            <FeaturesList />
            
        </>
    )
}