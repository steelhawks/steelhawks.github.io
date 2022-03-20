import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

import './News2.style.css'

export const News = ()=> {
    return(
        <div>
            <div className='title2022'>
                <h1 id="TWENTYTWENTYTWO">2022</h1>
            </div>
                <h2 id="subtitle">WE WON!</h2>
                <img id="newsimg" src="/media/NYTRalliance.jpg" alt="nytr"></img><br/> {/* find higher res image*/}
                <p2 id="Text">We took home first place at NY Tech Valley Regional with <a href="https://www.marsfirst.org/">MARS 2614</a> and <a href="https://team5484.com/">Wolf Pack 5484</a>! <br/>
                The Steel Hawks will be competing at SBPLI2 Long Island Regional and NYC Regional soon!<br/><br/>
                <b>WE WILL BE ATTENDING THE FRC CHAMPIONSHIPS IN APRIL!</b><br/>
                Please support our trip to Houston, TX via our <a href="https://gofund.me/a831c91b">GoFundMe</a>.</p2>
        </div>
    )
}