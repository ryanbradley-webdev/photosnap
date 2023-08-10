import Featured from "./Featured"

import { SAMPLE_STORIES } from "../../samepleData/sampleStories"
import Appalachia from '../../assets/sample-stories/appalachia.jpg'
import Card from "../../components/card/Card"

export default function Stories() {
    return (
        <>
        
            <Featured
                story={FEATURED_STORY}
            />

            <section>

                {SAMPLE_STORIES.map(story => (
                    <Card
                        key={crypto.randomUUID()}
                        {...story}
                    />
                ))}

            </section>
        
        </>
    )
}

const FEATURED_STORY = {
    title: 'Hazy Full Moon of Appalachia',
    author: 'John Appleseed',
    link: '/',
    date: '3-2-2020',
    image: Appalachia
}