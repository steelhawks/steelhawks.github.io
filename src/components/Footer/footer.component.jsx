import React from 'react';

import './footer.style.css'
import { SOCIALMEDIA } from '../../data/social'

export const Footer = () => {

    const MEDIAS = SOCIALMEDIA

    return (
        <section className="footer">
            {
                MEDIAS.map(media => (
                    <a href={media.linkTo} target="_blank"><i class={media.iconClass}/></a>
                ))
            }
            <h4><b>© 2021</b></h4>
        </section>
    )
}