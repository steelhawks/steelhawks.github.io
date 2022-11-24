import React from 'react'

export const News = ()=> {
    return(
        <div>
            <div className='title2022'>
                <h1 id="season">2022 SEASON</h1>
            </div>
                <h2>TECH VALLEY REGIONAL</h2>
                <h3>WE WON!</h3>
                <img className="" src="/media/2022events/NYTR.jpg" alt="nytr"></img><br/> {/* find higher res image*/}
                <p2 className="">We took home <b>first place</b> at NY Tech Valley Regional with <a href="src/pages/Home/News.component">MARS 2614</a> and <a href="src/pages/Home/News.component">Wolf Pack 5484</a>, securing a spot at the championships, and picking up an <b>Entrepreneurship Award</b> along the way!</p2>
                
                <h2>LONG ISLAND REGIONAL 2</h2>
                <img className="newsimg" id="SBPLI2" src="/media/2022events/SBPLI2.jpg" alt="SBPLI REGIONAL #2"></img><br/> {/* find higher res image*/}
                <p2>We made a good run, placing fourth in the qualifiers and made it to the semifinals, as well as winning a second <b>Entrepreneurship Award</b>!</p2>

                <h2>NYC REGIONAL</h2>
                <img className="newsimg" id="NYC" src="/media/2022events/NYCity.jpg" alt="NYC"></img><br/> {/* find higher res image*/}
                <p2>We ranked 5th out of 48 teams during qualifiers and made it to the playoffs as captains of the 4th seeded alliance, as well as winning the <b>Excellence in Engineering</b> award!<br/> Furthermore, our <b>Jessie Li</b> won the <b>Dean's List Finalist Award</b>!</p2>

                <h2>FIRST CHAMPIONSHIP</h2>
                <img className="newsimg" id="NYC" src="/media/2022events/Champs.jpg" alt="NYC"></img><br/> {/* find higher res image*/}
                <p2>As a team, making it to Worlds was one of the most fulfilling experiences we could have had. Returning back in-person after almost 2 years was definitely a challenge, but we ranked 16th of 76 teams in our division, <b>breaking our personal record!</b></p2>
                
                <p2 style={{color: "var(--accent)"}}>Thank you to our sponsors, parents, school communities, and volunteers who made this season possible!</p2>
        </div>
    )
}