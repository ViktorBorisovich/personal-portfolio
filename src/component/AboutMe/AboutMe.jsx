import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import avatarUrl from "../../assets/img/avatar/avatar.png";
import Grid from "@material-ui/core/Grid";
import { FormattedMessage } from "react-intl";

function aboutMe(props) {
  const { classes } = props;

  return (
    <Grid
      className={classNames(classes.section_aboutMe, classes.container)}
      id="section_0"
      container
      spacing={40}
    >
      <Grid item container xs={12} md={4} justify="center">
        <Avatar
          alt="Viktor Bendyukov"
          src={avatarUrl}
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={8}
        direction="column"
        alignItems="center"
        className={classes.aboutMe_description}
      >
        <h2 className={classes.aboutMeDescriptionHeadline}>
          <FormattedMessage id="aboutMe.h2" defaultMessage="Hey, i'm Viktor." />
        </h2>
        <p className={classes.aboutMeDescriptionText}>
          <FormattedMessage
            id="aboutMe.p_1"
            defaultMessage="Junior frontend developer. Nice to meet you!"
          />
        </p>
        <p className={classes.aboutMeDescriptionText}>
          <FormattedMessage
            id="aboutMe.p_2"
            defaultMessage="I like to create beautiful, modern and most importantly, high-speed applications. I like to learn new technologies and use them, I also devote a large amount of time for  getting hight knowlege JavaScript."
          />
        </p>
        <p className={classes.aboutMeDescriptionText}>
          <FormattedMessage
            id="aboutMe.p_3"
            defaultMessage="My main goal is to become a frontend web development expert."
          />
        </p>
      </Grid>
    </Grid>
  );
}

const styles = theme => ({
  section_aboutMe: {
    paddingTop: 50
  },
  container: {
    margin: "0 auto",
    width: "80%",
    maxWidth: "1200px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  bigAvatar: {
    width: 250,
    height: 250
  },
  aboutMeDescriptionHeadline: {
    fontSize: 42,
    width: "100%",
    margin: "10px 0",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 32
    }
  },
  aboutMeDescriptionText: {
    fontSize: 20,
    width: "80%",
    margin: "5px 0",
    lineHeight: "1.2",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16
    }
  }
});

aboutMe.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(aboutMe);
