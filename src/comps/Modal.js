import React from 'react';
import { motion } from 'framer-motion';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import CustomTabs from "./CustomTabs/CustomTabs";

import styles from "../assets/jss/material-kit-react/components/customTabsStyle";

const useStyles = makeStyles(styles);

const Modal = ({ setSelectedImg, selectedImg, setSelectedCaption, selectedCaption }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
      setSelectedCaption(null);
    }
  }
  
  const classes = useStyles();

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <Container maxWidth="sm">
        <CustomTabs
          headerColor="primary"
          tabs={[
            {
              tabName: "Caption",
              tabIcon: Favorite,
              tabContent: (
              <h2 className={classes.captionContent}>{selectedCaption}</h2>
              )
            }
          ]}
        />
      </Container>
    </motion.div>
  )
}

export default Modal;