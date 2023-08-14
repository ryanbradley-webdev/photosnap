import DomainIcon from '../../assets/DomainIcon'
import DragIcon from '../../assets/DragIcon'
import EmbedIcon from '../../assets/EmbedIcon'
import ExposureIcon from '../../assets/ExposureIcon'
import NoLimitIcon from '../../assets/NoLimitIcon'
import ResponsiveIcon from '../../assets/ResponsiveIcon'
import styles from './featuresList.module.css'

export default function FeaturesList({
    limit
}: {
    limit?: boolean
}) {
    return (
        <section
            className={`${styles.features} ${limit ? '' : styles.grid}`}
        >

            <div>

                <ResponsiveIcon />

                <h3>
                    100% Responsive
                </h3>

                <p>
                    No matter which device you're on, our site is fully responsive and stories look beautiful on any screen.
                </p>

            </div>

            <div>

                <NoLimitIcon />

                <h3>
                    No Photo Upload Limit
                </h3>

                <p>
                    Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.
                </p>

            </div>

            <div>

                <EmbedIcon />

                <h3>
                    Available to Embed
                </h3>

                <p>
                    Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.
                </p>

            </div>

            {!limit && (
                <>
                    <div>

                        <DomainIcon />

                        <h3>
                            Custom Domain
                        </h3>

                        <p>
                            With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!
                        </p>

                    </div>

                    <div>

                        <ExposureIcon />

                        <h3>
                            Boost Your Exposure
                        </h3>

                        <p>
                            Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.
                        </p>

                    </div>

                    <div>

                        <DragIcon />

                        <h3>
                            Drag & Drop Image
                        </h3>

                        <p>
                            Easily drag and drop your image and get beautiful shots every time. No over the top tooling to add friction to create stories.
                        </p>

                    </div>
                </>
            )}

        </section>
    )
}