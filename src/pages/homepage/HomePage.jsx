import React from "react";
import "./HomePage.scss";
import Directory from "../../Components/directory/Directory";

import { HomepageContainer } from "./Homepage.styles";

const HomePage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default HomePage;
