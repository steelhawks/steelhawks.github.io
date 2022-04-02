import React from 'react'

import './News2.style.css'

export const News = ()=> {
    return(
        <div>
            <div className='title2022'>
                <h1 id="TWENTYTWENTYTWO">YEAR_2022</h1>
            </div>
                <h2>TECH VALLEY REGIONAL</h2>
                <h3>WE WON!</h3>
                <img className='newsimg' src="/media/NYTRalliance.jpg" alt="nytr"></img><br/> {/* find higher res image*/}
                <p2>We took home first place at NY Tech Valley Regional with <a href="https://www.marsfirst.org/">MARS 2614</a> and <a href="https://team5484.com/">Wolf Pack 5484</a>!</p2><br/>
                
                <h2>LONG ISLAND REGIONAL 2</h2>
                <img className="newsimg" id="SBPLI2" src="/media/SBPLI2.jpg" alt="nytr"></img><br/> {/* find higher res image*/}
                <p2>Although we didn't win, we placed fourth in the qualifiers and made it to the semifinals!</p2><br/><br/>

                <h2>NYC REGIONAL</h2>
                <p2>Watch out! We'll be at the NYC Regional from April 7th to April 10th!</p2><br/>

                <h2>FIRST CHAMPIONSHIP</h2>
                <p2>We will be competing at the FIRST Championship in Houston, Texas later this month!</p2><br/>        
        </div>
    )
}