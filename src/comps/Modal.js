import React from 'react';
import { motion } from 'framer-motion';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CustomTabs from "./CustomTabs/CustomTabs";
import CustomInput from "./CustomInput/CustomInput";
import Button from "./CustomButtons/Button";

import styles from "../assets/jss/material-kit-react/components/customTabsStyle";

const useStyles = makeStyles(styles);

const Modal = ({ setSelectedImg, selectedImg, setSelectedCaption, selectedCaption }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
      setSelectedCaption(null);
    }
  }

  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

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
              <div >
                { selectedCaption 
                  ? <h2 className={classes.captionContent}>{selectedCaption}</h2> 
                  : <h2 className={classes.captionContent}>
                   <div className={classes.root}>
                    <FormControlLabel
                      control={
                          <Button justIcon round color="primary" onClick={handleChange}>
                            <Favorite className={classes.icons} />
                          </Button>
                        }
                    />
                    <div className={classes.container}>
                      <Zoom in={checked}>
                        <Paper elevation={4} className={classes.paper}>
                          <CustomInput
                              labelText="Caption"
                              id="imgCaption"
                              formControlProps={{
                              fullWidth: true,
                              className: classes.textArea
                              }}
                              inputProps={{
                              multiline: true,
                              rows: 1
                              }}
                          />
                        </Paper>
                      </Zoom>
                    </div>
                    </div> 
                  </h2>
                }  
              </div>
              )
            }
          ]}
        />
      </Container>
    </motion.div>
  )
}

export default Modal;