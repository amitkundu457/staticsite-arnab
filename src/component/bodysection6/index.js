import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Borderradiusanimation from "../borderroundanimation";
export default function Bodysection6() {
  return (
    <div
      className="bodysection2-container md:space-y-0 space-y-4 md:space-x-4
     px-4 flex md:flex-row flex-col xl:px-[12rem] "
    >
      <div className="row md:w-[30rem] space-y-5">
        <div className="space-y-2">
          <h3 className="text-theme-primary-heading-text-color font-[600] font-Roboto">
            One-on-One
          </h3>
          <h3 className="text-theme-secondary-heading-text-color text-[40px] font-Montserrat font-[700] leading-[1.125]">
            A new work <br /> experience
          </h3>
        </div>
        <p className="text-[18.4px] font-Roboto text-theme-default-text-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem
          tibi studiose et diligenter tractandos magnopere censeo. Duo Reges:
          constructio interrete. Ad eas enim res ab Epicuro praecepta dantur.
        </p>
        <div>
          <a
            href=""
            className="text-theme-link-text-color space-x-3 flex text-[18.4px] font-[600]"
          >
            <h3> Learn More</h3>
            <div className="grid place-items-center">
              <AiOutlineArrowRight />
            </div>
          </a>
        </div>
      </div>

      <div className="row xl:w-[50rem] grid place-items-center ">
        <div className="relative">
          <Borderradiusanimation />
          <div
            className="absolute bottom-4  xl:-right-[16rem] 
           -left-4 xl:left-0 xl:-bottom-[2rem] md:top-0 md:-right-5 grid place-items-center"
          >
            <StaticImage
              class="xl:w-[35rem] w-[18rem] md:w-[25rem]"
              src="../../images/meeting-feature-5.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
