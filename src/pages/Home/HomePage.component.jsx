import React from 'react'
import { News2022 } from './News2022'


const HomePage = () => {
    return (
        <section>
            <img alt="Home" src="/media/homeImgLow.jpg" srcSet='media/homeImgHigh.jpg'/>
            <News2022/>

            <p className="pb-4 text-secondary">Thank you to our sponsors, parents, school communities, and volunteers who made this season possible!</p>
        </section>
    )

}

export default HomePage