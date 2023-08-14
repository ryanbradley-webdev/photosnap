import Hero from "../../components/hero/Hero"
import FeaturesMobile from '../../assets/mobile-images/features.jpg'
import FeaturesTablet from '../../assets/tablet-images/features.jpg'
import FeaturesList from "../../components/featuresList/FeaturesList"
import InviteLink from "../../components/inviteLink/InviteLink"

export default function Features() {
    return (
        <>
        
            <Hero>

                <img
                    src={FeaturesMobile}
                    alt="Features"
                />

                <img
                    src={FeaturesTablet}
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

            <InviteLink />
            
        </>
    )
}