import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import NFTSection from "/pages-sections/Sections/NFTSection.js";


// Logos
import logoWhite from "../public/img/logo_white.png";
import logoDark from "../public/img/logo.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Donnors(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const brand = {
    dark: logoDark,
    white: logoWhite,
  };

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={brand}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/collection-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Sample NTF </h1>
              <h4>
              This section shows how the information and details would be that an NFT of the collection would be able to add content to the Museum of Indigenous Communities.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <NFTSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
