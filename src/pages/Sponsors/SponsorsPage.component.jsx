import React from "react";

import { sponsorList } from "./sponsorData";

const SponsorPage = () => {
  return (
    <div>
      <h1 className="pageTitle mb-2">Sponsors</h1>
      <h2 className="mb-10 md:mb-20 text-2xl md:text-3xl px-10 md:px-24">
        Thank you sponsors! We are eternally grateful for your support!
      </h2>
      <div className="grid gap-4 grid-cols-3 px-1 md:px-2 place-content-center">
        {sponsorList.map((sponsor) => {
          return (
            <div className="overflow-hidden">
              <h2 className="text-base text-center">{sponsor.name}</h2>
              <div className="overflow-y-hidden h-full flex justify-center items-center pb-10">
                <a href={sponsor.url}>
                  <picture>
                    <source
                      srcSet={
                        "/media/sponsors/avif/" + sponsor.fileName + ".avif"
                      }
                      type="image/avif"
                    />
                    <source
                      srcSet={
                        "/media/sponsors/webp/" + sponsor.fileName + ".webp"
                      }
                      type="image/webp"
                    />
                    <source
                      srcSet={
                        "/media/sponsors/png/" + sponsor.fileName + ".png"
                      }
                      type="image/png"
                    />
                    <img
                      className={
                        "max-w-[420px] max-h-[420px] aspect-auto p-2 w-full rounded-md " +
                        sponsor.style
                      }
                      alt={sponsor.name}
                    />
                  </picture>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SponsorPage;
