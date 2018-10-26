import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

function Footer(props) {
  const { classes } = props;
  
  return (
    <div className={classes.footer}>
      <Grid className={classes.container} container alignItems="center">
        <p className={classes.footerText}>© Viktor Bendyukov 2018</p>
      </Grid>
    </div>
  );
}

const styles = theme => ({
  footer: {
    background: "linear-gradient(5deg, #2e2e2e 65%, white 65%)",
    height: 250
  },
  container: {
    margin: "0 auto",
    height: "100%",
    width: "80%",
    maxWidth: "1200px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  footerText: {
    color: "white",
    marginLeft: 40
  }
});

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
