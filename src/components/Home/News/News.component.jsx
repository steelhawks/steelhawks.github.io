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
                <p2>We took home first place at NY Tech Valley Regional with <a href="https://www.marsfirst.org/">MARS 2614</a> and <a href="https://team5484.com/">Wolf Pack 5484</a>,<br/> securing a spot at the championships, picking up an <b>Entrepreneurship Award</b> along the way!</p2><br/>
                
                <h2>LONG ISLAND REGIONAL 2</h2>
                <img className="newsimg" id="SBPLI2" src="/media/SBPLI2.jpg" alt="SBPLI REGIONAL #2"></img><br/> {/* find higher res image*/}
                <p2>We made a good run, placing fourth in the qualifiers and made it to the semifinals,<br/>as well as winning a second <b>Entrepreneurship Award</b>!</p2><br/><br/>

                <h2>NYC REGIONAL</h2>
                <img className="newsimg" id="NYC" src="/media/NYC.jpg" alt="NYC"></img><br/> {/* find higher res image*/}
                <p2>We ranked 5th out of 48 teams during qualifiers and made it to the playoffs as captains of the 4th <br/>seeded alliance, as well as winning the <b>Engineering Inspiration Award</b>!<br/>Congratulations to <b>Jessie Li</b> for winning the <b>Dean's List Finalist Award</b>!</p2><br/>

                <h2>FIRST CHAMPIONSHIP</h2>
                <p2>We will be competing at the FIRST Championship in Houston, Texas later next week!<br/>Be sure to cheer us on!</p2><br/>        
        </div>
    )
}