import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import Header from '/components/Header/Header.js'
import Footer from '/components/Footer/Footer.js'
import GridContainer from '/components/Grid/GridContainer.js'
import GridItem from '/components/Grid/GridItem.js'
import Button from '/components/CustomButtons/Button.js'
import HeaderLinks from '/components/Header/HeaderLinks.js'
import Parallax from '/components/Parallax/Parallax.js'

import styles from '/styles/jss/nextjs-material-kit/pages/landingPage.js'

// Sections for this page
import ProjectSection from '/pages-sections/Sections/ProjectSection.js'

// Logos
import logoWhite from '../public/img/logo_white.png'
import logoDark from '../public/img/logo.png'
import CollectionSection from '../pages-sections/Sections/CollectionSection'
import SlugSection from '../pages-sections/Sections/SlugSection'
import SectionAbout from '../pages-sections/Sections/SectionAbout'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export default function LandingPage(props) {
  const classes = useStyles()
  const { ...rest } = props

  const brand = {
    dark: logoDark,
    white: logoWhite,
  }

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
          color: 'white',
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Cosmovision</h1>
              <h4>
                {
                  'The term "cosmovision" refers to the beliefs, values and knowledge systems that articulate the social life of indigenous groups. With time, knowledge has been lost; we want to preserve it in a decentralized and perpetual way.'
                }
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href="mailto:name@rapidtables.com?subject=I%20want%20to%20be%20part%20of%20the%20tribe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" style={{ paddingRight: 12 }} />
                Join the tribe
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CollectionSection />
          <ProjectSection />
          <SectionAbout />
          <SlugSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}
