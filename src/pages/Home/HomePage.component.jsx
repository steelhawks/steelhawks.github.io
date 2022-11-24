import React, { useEffect } from 'react'
import { HomeBanner, HomeGrid } from './Home.components'
import { News } from './News.component'

import { CARDS } from '../../data/home'

const HomePage = () => {
    return (
        <section>
            <img alt="Home" src="/media/homeImgLow.jpg" srcSet='media/homeImgHigh.jpg'/>
            <News/>

            <HomeGrid cards={CARDS}/>
        </section>
    )

}

export default HomePage