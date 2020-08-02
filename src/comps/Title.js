import React from 'react';

import Header from "./Header/Header";
import HeaderLinks from "./Header/HeaderLinks";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-kit-react/views/components";

const useStyles = makeStyles(styles);
  
const Title = () => {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Fahrevigram"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
      />
      
      <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Album Kita</h1>
                <h3 className={classes.subtitle}>
                  Tiap momen unik diambil menggunakan kamera, menjelaskan berbagai ragam perasaan, hanya kita berdua.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
    </div>
    
  )
}

export default Title;