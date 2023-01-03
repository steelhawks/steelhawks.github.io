import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const ContactPage = () => {
  return (
    <div>
      <h1 className="pageTitle">Contact</h1>
      <section className="flex justify-center">
        <div>
          <a
            href="mailto: JHeitman@schools.nyc.gov"
            className="flex justify-center items-center space-x-1"
          >
            <FontAwesomeIcon icon={solid("envelope")} />
            <p className="md:text-2xl">JHeitman@schools.nyc.gov</p>
          </a>

          <a
            className="flex justify-center items-center space-x-1"
            target="_blank"
            rel="noreferrer"
            href="https://goo.gl/maps/ULRZBRtfA54hH3NN7"
          >
            <FontAwesomeIcon icon={solid("location-dot")} />
            <p className="md:text-2xl">Townsend Harris High School</p>
          </a>

          <a
            href="tel: 7185755580"
            className="flex justify-center items-center space-x-1"
          >
            <FontAwesomeIcon icon={solid("phone")} />
            <p className="md:text-2xl">(718)575-5580</p>
          </a>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.22748120072!2d-73.82348798432577!3d40.73501974414342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26061029c1fa5%3A0xdf1a323bf2fdf3c5!2sTownsend%20Harris%20High%20School!5e0!3m2!1sen!2sus!4v1672104250103!5m2!1sen!2sus"
        width="1680"
        height="500"
        className="border-0 m-auto my-10"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactPage;
