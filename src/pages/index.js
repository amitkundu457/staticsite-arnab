import * as React from "react";
// import Header from "../component/header.js";
import Banner from "../component/banner/index.jsx";
import Bodysection1 from "../component/bodysection/index.jsx";
import Bodysection2 from "../component/Bodysection2/index.js";
import Bodysection3 from "../component/bodysectiin3/index.js";
import Bodysection4 from "../component/bodysection4/index.js";
import Bodysection5 from "../component/Bodysection5/index.js";
import Bodysection6 from "../component/Bodysection6/index.js";
import Curvedivcomponent from "../component/curvecomponent/index.js";
import Bodysection7 from "../component/bodysection7/index.js";
import Footer from "../component/footer/index.jsx";
const IndexPage = () => {
  return (
    <div className="main-container overflow-hidden ">
      <div className="scroll-smooth ">
        {/* <Header /> */}
        <Banner />
        <div className="space-y-20">
          <Bodysection1 />
          <Bodysection2 />
          <Bodysection3 />
          <Bodysection4 />
          <Bodysection5 />
          <Bodysection6 />
          <Curvedivcomponent />
          <Bodysection7 />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
