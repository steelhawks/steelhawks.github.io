import React from 'react'
import './contact.style.css'

const ContactIcon = (props) => (

    <React.Fragment>
        <i className={props.name}/> {props.renderThis}
    </React.Fragment>
)

export const ContactPage = (props) => {
    return(
        <>
            <div id='contactInfo'>
                <h6>TOWNSEND HARRIS HIGH SCHOOL</h6><br/>
                <p>
                    149-11 Melbourne Avenue<br/>
                    Flushing, NY 11367<br/>
                    <ContactIcon name="fas fa-phone fa-sm" renderThis={<span>(718) 575-5580</span>}/><br/>
            <ContactIcon name="fas fa-inbox fa-sm" renderThis={<a href="mailto:townsendharrisrobotics@gmail.com">townsendharrisrobotics@gmail.com</a>}/><br/>
                </p>
                
            </div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12092.910605359892!2d-73.821299!3d40.735016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf1a323bf2fdf3c5!2sTownsend%20Harris%20High%20School!5e0!3m2!1sen!2sus!4v1647094942787!5m2!1sen!2sus" width="100%" height="500px" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </>
    )
}