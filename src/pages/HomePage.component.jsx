import React, { useEffect } from 'react'
import { HomeBanner, HomeGrid } from '../components/Home/Home.components'

import { CARDS } from '../data/home'

const HomePage = () => {

    useEffect(() => {
        window.PixleeAsyncInit()
    }, [])

    return (

        <section>
            <HomeBanner/>
            <div id="pixlee_container"></div>
            <HomeGrid cards={CARDS}/>
        </section>

    )

}

export default HomePage