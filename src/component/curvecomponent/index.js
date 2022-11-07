import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { BsCreditCard, BsClockHistory, BsBuilding } from "react-icons/bs";
import { SlDiamond } from "react-icons/sl";
import Carousel from "../carousel";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function Curvedivcomponent() {
  const [counter, setCounter] = useState(false);

  return (
    <div className="  curve">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        // className="h-[5rem]"
        // width="100vw"
        // height="10rem"
      >
        <path
          fill="#F5F6FA"
          fill-opacity="1"
          d="M0,128L80,138.7C160,149,320,171,480,160C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-theme-primary-bg-color   space-y-16 py-5">
        <div className="section-title text-center">
          <h3 className="font-Roboto text-[20px] text-theme-primary-heading-text-color font-[700]">
            Hi Performing Application
          </h3>
          <h1 className="text-[32px] text-theme-secondary-heading-text-color font-Montserrat font-[700]">
            Say Hello to Productive Meetings
          </h1>
        </div>
        .
        <div className="grid place-items-center">
          <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 md:space-x-20">
            <div className="item grid place-items-center space-y-2">
              <BsCreditCard className="text-[2rem] text-theme-primary-icon-color" />
              <h3 className="text-[28px] font-Roboto font-[800] text-theme-secondary-heading-text-color">
                {" "}
                <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                >
                  {counter && <CountUp end={345} />}
                </ScrollTrigger>
              </h3>
              <h3 className="text-theme-default-text-color text-center text-[15.2px] font-Roboto">
                Available payment gateways
              </h3>
            </div>
            <div className="item grid place-items-center space-y-2">
              <SlDiamond className="text-[2rem] text-theme-primary-icon-color" />
              <h3 className="text-[28px] font-Roboto font-[800] text-theme-secondary-heading-text-color">
                {" "}
                <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                >
                  {counter && <CountUp end={1587} />}
                </ScrollTrigger>
              </h3>
              <h3 className="text-theme-default-text-color text-center text-[15.2px] font-Roboto">
                Customers across the world
              </h3>
            </div>
            <div className="item grid place-items-center space-y-2">
              <BsClockHistory className="text-[2rem] text-theme-primary-icon-color" />
              <h3 className="text-[28px] font-Roboto font-[800] text-theme-secondary-heading-text-color">
                <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                >
                  {counter && <CountUp end={93} />}
                </ScrollTrigger>
              </h3>
              <h3 className="text-theme-default-text-color text-center text-[15.2px] font-Roboto">
                Real time balance metrics
              </h3>
            </div>
            <div className="item grid place-items-center space-y-2">
              <BsBuilding className="text-[2rem] text-theme-primary-icon-color" />
              <h3 className="text-[28px] font-Roboto font-[800] text-theme-secondary-heading-text-color">
                <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                >
                  {counter && <CountUp end={587} />}
                </ScrollTrigger>
              </h3>
              <h3 className="text-theme-default-text-color text-center text-[15.2px] font-Roboto">
                Regional and local offices
              </h3>
            </div>
          </div>
        </div>
        {/* END OF COUNT NUMBER */}
        <div className="section-testimonial px-4 grid place-items-center">
          <div className="row grid md:grid-cols-2 grid-cols-1 gap-7">
            <div className="item space-y-5 border border-theme-default-border-color xl:w-[29rem] rounded-2xl p-9 shadow-md bg-theme-default-bg-color">
              <p className="flex text-theme-default-text-color relative  text-[14.4px] font-Roboto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="4em"
                  height="1em"
                  viewBox="0 0 1664 1408"
                  data-icon="fa:quote-left"
                  data-v-b083e0a8=""
                  class="iconify mr-2 text-light iconify--fa absolute -left-[18px]"
                >
                  <path
                    fill="currentColor"
                    d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z"
                  ></path>
                </svg>
                <span className="indent-8">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                  iste, inquam, de voluptate quid sentit? Hanc quoque
                  iucunditatem, si vis, transfer in animum; Erat enim Polemonis.
                  Apparet statim, quae sint officia.
                </span>
              </p>
              <div className="item flex justify-between ">
                <div className="row flex space-x-2">
                  <div className="image rounded-xl w-[40px] overflow-hidden h-[40px]">
                    <StaticImage class="" src="../../images/25.jpg" />
                  </div>
                  <div className="title">
                    <h3 className="text-theme-secondary-heading-text-color font-Montserrat text-[14.4px] font-[700]">
                      Henry Statterman
                    </h3>
                    <p className="text-[#a2a5b9] text-[12.8px] font-Roboto">
                      Sales Manager
                    </p>
                  </div>
                </div>

                <div className="row  grid place-items-center">
                  <StaticImage src="../../images/infinite (1).svg" />
                </div>
              </div>
            </div>
            <div className="item space-y-5 border xl:w-[29rem] border-theme-default-border-color rounded-2xl p-9 shadow-md bg-theme-default-bg-color">
              <p className="flex text-theme-default-text-color relative  text-[14.4px] font-Roboto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="4em"
                  height="1em"
                  viewBox="0 0 1664 1408"
                  data-icon="fa:quote-left"
                  data-v-b083e0a8=""
                  class="iconify mr-2 text-light iconify--fa absolute -left-[18px]"
                >
                  <path
                    fill="currentColor"
                    d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z"
                  ></path>
                </svg>
                <span className="indent-8">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                  iste, inquam, de voluptate quid sentit? Hanc quoque
                  iucunditatem, si vis, transfer in animum; Erat enim Polemonis.
                  Apparet statim, quae sint officia.
                </span>
              </p>
              <div className="item flex justify-between ">
                <div className="row flex space-x-2">
                  <div className="image rounded-xl w-[40px] overflow-hidden h-[40px]">
                    <StaticImage class="" src="../../images/25.jpg" />
                  </div>
                  <div className="title">
                    <h3 className="text-theme-secondary-heading-text-color font-Montserrat text-[14.4px] font-[700]">
                      Henry Statterman
                    </h3>
                    <p className="text-[#a2a5b9] text-[12.8px] font-Roboto">
                      Sales Manager
                    </p>
                  </div>
                </div>

                <div className="row  grid place-items-center">
                  <StaticImage src="../../images/infinite (1).svg" />
                </div>
              </div>
            </div>
            <div className="item space-y-5 border xl:w-[29rem] border-theme-default-border-color rounded-2xl p-9 shadow-md bg-theme-default-bg-color">
              <p className="flex text-theme-default-text-color relative  text-[14.4px] font-Roboto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="4em"
                  height="1em"
                  viewBox="0 0 1664 1408"
                  data-icon="fa:quote-left"
                  data-v-b083e0a8=""
                  class="iconify mr-2 text-light iconify--fa absolute -left-[18px]"
                >
                  <path
                    fill="currentColor"
                    d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z"
                  ></path>
                </svg>
                <span className="indent-8">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                  iste, inquam, de voluptate quid sentit? Hanc quoque
                  iucunditatem, si vis, transfer in animum; Erat enim Polemonis.
                  Apparet statim, quae sint officia.
                </span>
              </p>
              <div className="item flex justify-between ">
                <div className="row flex space-x-2">
                  <div className="image rounded-xl w-[40px] overflow-hidden h-[40px]">
                    <StaticImage class="" src="../../images/25.jpg" />
                  </div>
                  <div className="title">
                    <h3 className="text-theme-secondary-heading-text-color font-Montserrat text-[14.4px] font-[700]">
                      Henry Statterman
                    </h3>
                    <p className="text-[#a2a5b9] text-[12.8px] font-Roboto">
                      Sales Manager
                    </p>
                  </div>
                </div>

                <div className="row  grid place-items-center">
                  <StaticImage src="../../images/infinite (1).svg" />
                </div>
              </div>
            </div>
            <div className="item space-y-5 border xl:w-[29rem] border-theme-default-border-color rounded-2xl p-9 shadow-md bg-theme-default-bg-color">
              <p className="flex text-theme-default-text-color relative  text-[14.4px] font-Roboto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="4em"
                  height="1em"
                  viewBox="0 0 1664 1408"
                  data-icon="fa:quote-left"
                  data-v-b083e0a8=""
                  class="iconify mr-2 text-light iconify--fa absolute -left-[18px]"
                >
                  <path
                    fill="currentColor"
                    d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z"
                  ></path>
                </svg>
                <span className="indent-8">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                  iste, inquam, de voluptate quid sentit? Hanc quoque
                  iucunditatem, si vis, transfer in animum; Erat enim Polemonis.
                  Apparet statim, quae sint officia.
                </span>
              </p>
              <div className="item flex justify-between ">
                <div className="row flex space-x-2">
                  <div className="image rounded-xl w-[40px] overflow-hidden h-[40px]">
                    <StaticImage class="" src="../../images/25.jpg" />
                  </div>
                  <div className="title">
                    <h3 className="text-theme-secondary-heading-text-color font-Montserrat text-[14.4px] font-[700]">
                      Henry Statterman
                    </h3>
                    <p className="text-[#a2a5b9] text-[12.8px] font-Roboto">
                      Sales Manager
                    </p>
                  </div>
                </div>

                <div className="row  grid place-items-center">
                  <StaticImage src="../../images/infinite (1).svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of testimonial section  */}
        <div className="grid place-items-center px-4">
          <h3 className="text-[16px] text-center text-theme-primary-heading-text-color font-Roboto font-[600]">
            WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500
          </h3>
        </div>
        {/* Start carousel section  */}
        <div className="xl:grid xl:place-items-center md:p-4">
          <div className="xl:w-[50rem] w-full  text-center">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
