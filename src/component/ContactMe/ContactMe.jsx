import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

import MyLocation from "../MyLocation/MyLocation.jsx";

import vkImg from "../../assets/img/socialIcon/vk.png";
import facebookImg from "../../assets/img/socialIcon/facebook.png";
import skypeImg from "../../assets/img/socialIcon/skype.png";
import gmailImg from "../../assets/img/socialIcon/gmail.png";

import htmlacademyImg from "../../assets/img/socialIcon/htmlAcademy.png";
import githubImg from "../../assets/img/socialIcon/github.png";
import codepenImg from "../../assets/img/socialIcon/codepen.png";
import freecodecampImg from "../../assets/img/socialIcon/freecodecamp.png";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, intl } = this.props;

    return (
      <Grid
        className={classNames(classes.myContact, classes.container)}
        container
        spacing={40}
        id="section_3"
      >
        <MyLocation />
        <Grid container item xs={12} md={6}>
          <Grid item xs={12}>
            <h2>
              <FormattedMessage
                id="myContacts.h2"
                defaultMessage="My contacts"
              />
            </h2>
          </Grid>
          <Grid item container justify="center" xs={3}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={`${intl.messages["myContacts.gmail"]} gmail`}
              placement="top"
            >
              <a
                className={classes.socialLink}
                href="mailto:viktorbendyukov@gmail.com"
              >
                <img src={gmailImg} alt="gmail - viktorbendyukov@gmail.com" />
              </a>
            </Tooltip>
          </Grid>
          <Grid item container justify="center" xs={3}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={`${intl.messages["myContacts.skype"]} Skype`}
              placement="top"
            >
              <a className={classes.socialLink} href="skype:witko95?call">
                <img src={skypeImg} alt="skype  -  witko95" />
              </a>
            </Tooltip>
          </Grid>
          <Grid item container justify="center" xs={3}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={`${intl.messages["myContacts.profile"]} VK`}
              placement="top"
            >
              <a
                className={classes.socialLink}
                href="https://vk.com/id31104402"
                target="_blank"
              >
                <img src={vkImg} alt="VK icon" />
              </a>
            </Tooltip>
          </Grid>
          <Grid item container justify="center" xs={3}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={`${intl.messages["myContacts.profile"]} Facebook`}
              placement="top"
            >
              <a
                className={classes.socialLink}
                href="https://www.facebook.com/viktor.bendyukov.3"
                target="_blank"
              >
                <img src={facebookImg} alt="facebook - icon" />
              </a>
            </Tooltip>
          </Grid>

          <Grid item container justify="center" xs={3}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={`${intl.messages["myContacts.profile"]} GitHub`}
              placement="top"
            >
              <a
                className={classes.socialLink}
                href="https://github.com/ViktorBorisovich"
                target="_blank"
              >
                <img src={githubImg} alt="github" />
              </a>
            </Tooltip>
          </Grid>
          <Grid item container justify="center" xs={3}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={`${intl.messages["myContacts.profile"]} Codepen`}
              placement="top"
            >
              <a
                className={classes.socialLink}
                href="https://codepen.io/ViktorBorisovich/"
                target="_blank"
              >
                <img src={codepenImg} alt="codepen" />
              </a>
            </Tooltip>
          </Grid>
          <Grid item container justify="center" xs={3}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={`${intl.messages["myContacts.profile"]} FreeCodeCamp`}
              placement="top"
            >
              <a
                className={classes.socialLink}
                href="https://www.freecodecamp.org/viktorborisovich"
                target="_blank"
              >
                <img src={freecodecampImg} alt="freecodecamp" />
              </a>
            </Tooltip>
          </Grid>
          <Grid item container justify="center" xs={3}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={`${intl.messages["myContacts.profile"]} HtmlAcademy`}
              placement="top"
            >
              <a
                className={classes.socialLink}
                href="https://htmlacademy.ru/profile/viktorborisovich"
                target="_blank"
              >
                <img src={htmlacademyImg} alt="htmlacademy" />
              </a>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  myContact: {
    paddingTop: 80,
  },
  container: {
    margin: "0 auto",
    width: "80%",
    maxWidth: "1200px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  socialLink: {
    maxHeight: 50,
    margin: 10,
    "& img": {
      width: 50
    }
  },
  darkTooltip: {
    fontSize: 13
  }
});

ContactMe.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(withStyles(styles)(ContactMe));