import React from 'react';

import './Footer.style.css'

import { SOCIALMEDIA } from '../../data/social'
import { WebsiteIcon } from '../Website/Website.components';

export const Footer = () => {

    return (

        <section className="footer">
            {
                SOCIALMEDIA.map(media => (
                    <WebsiteIcon key={media.id} linkTo={media.linkTo} iconClass={'mediaIcon ' + media.iconClass}/>
                ))
            }
            <h4><b>© 2021</b></h4>
        </section>

    )
    
}