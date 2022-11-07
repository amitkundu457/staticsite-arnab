import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Borderradiusanimation from "../borderroundanimation";
export default function Bodysection5() {
  return (
    <div
      className="bodysection2-container px-4 md:space-x-4
       flex md:flex-row flex-col-reverse 
    xl:px-[12rem] "
    >
      <div className="row xl:w-[50rem] grid place-items-start  ">
        <div className="">
          <StaticImage
            class="xl:w-[35rem] md:w-[28rem]"
            src="../../images/meeting-feature-7.png"
          />
        </div>
      </div>
      <div className="row md:w-[30rem] space-y-5">
        <div className="space-y-2">
          <h3 className="text-theme-primary-heading-text-color font-[600] font-Roboto">
            Integrations
          </h3>
          <h3 className="text-theme-secondary-heading-text-color text-[40px] font-Montserrat font-[700] leading-[1.125]">
            Integrate your <br /> workflow
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
    </div>
  );
}
