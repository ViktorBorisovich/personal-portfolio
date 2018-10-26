import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FormattedMessage } from "react-intl";

import hamovnikiDesktopTab from "../../assets/img/projectDeskTab/hamovniki_desk_tab.png";
import hamovnikiMob from "../../assets/img/projectMobile/hamovniki.png";

import aflDesktopTab from "../../assets/img/projectDeskTab/afl_desk_tab.png";
import aflMob from "../../assets/img/projectMobile/afl.png";

import vatutDesktopTab from "../../assets/img/projectDeskTab/nv_desk_tab.png";
import vatutMob from "../../assets/img/projectMobile/nv.png";

import atomDesktopTab from "../../assets/img/projectDeskTab/atom_desk_tab.png";
import atomMob from "../../assets/img/projectMobile/atom.png";

import redzoneDesktopTab from "../../assets/img/projectDeskTab/redzone_desk_tab.png";
import redzoneMob from "../../assets/img/projectMobile/redzone.png";

import vatutLifeDesktopTab from "../../assets/img/projectDeskTab/nv_life_desk_tab.png";
import vatutLifeMob from "../../assets/img/projectMobile/nv_life.png";

class MyExperience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid
        className={classNames(classes.MyExperience, classes.container)}
        container
        spacing={40}
        id = "section_2"
      >
        <Grid item xs={12}>
          <h2>
            <FormattedMessage
              id="myExpirience.h2"
              defaultMessage="My experience:"
            />
          </h2>
        </Grid>

        <Grid container item xs={12} className={classes.experienceItem}>
          <Grid item xs={12} md={8} container justify="center">
            <img className={classes.imgDesktop} src={hamovnikiDesktopTab} />
            <img className={classes.imgMob} src={hamovnikiMob} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={4}
            direction="column"
            justify="space-between"
            alignItems="center"
            className={classes.experienceItemInfo}
          >
            <h3>
              <FormattedMessage
                id="myExpirience.hamovniki_h2"
                defaultMessage="My experience:"
              />
            </h3>
            <p>
              <FormattedMessage
                id="myExpirience.hamovniki_p_1"
                defaultMessage="Two-page site. The second page is are  a  map of API Yandex.maps."
              />
            </p>
            <p>
              <FormattedMessage
                id="myExpirience.hamovniki_p_2"
                defaultMessage="Adaptation: "
              />
              IE 10-11,Edge 16+, FireFox 54+, Chrome 58+, iOS Safari
            </p>
            <ul>
              <FormattedMessage
                id="myExpirience.hamovniki_ul"
                defaultMessage="Technologies: "
              />
              <li>HTML</li>
              <li>SCSS</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>
                <FormattedMessage
                  id="myExpirience.hamovniki_li_5"
                  defaultMessage="API yandex.maps"
                />
              </li>
              <li>Webpack</li>
              <li>Git</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container item xs={12} className={classes.experienceItem}>
          <Grid
            item
            xs={12}
            md={8}
            className={classes.experienceItem__img}
            container
            justify="center"
          >
            <img className={classes.imgDesktop} src={aflDesktopTab} />
            <img className={classes.imgMob} src={aflMob} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={4}
            direction="column"
            justify="space-between"
            alignItems="center"
            className={classes.experienceItemInfo}
          >
            <h3>
              <FormattedMessage
                id="myExpirience.afl_h2"
                defaultMessage="Aeroflot Bonus"
              />
            </h3>
            <p>
              <FormattedMessage
                id="myExpirience.afl_p_1"
                defaultMessage="Information site about the promotion."
              />
            </p>
            <p>
              <FormattedMessage
                id="myExpirience.hamovniki_p_2"
                defaultMessage="Adaptation: "
              />
              IE 10-11,Edge 16+, FireFox 54+, Chrome 58+, iOS Safari.
            </p>
            <ul>
              <FormattedMessage
                id="myExpirience.hamovniki_ul"
                defaultMessage="Technologies: "
              />
              <li>HTML</li>
              <li>SCSS</li>
              <li>jQuery</li>
              <li>ES6</li>
              <li>Bootstrap</li>
              <li>Webpack</li>
              <li>Git</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container item xs={12} className={classes.experienceItem}>
          <Grid
            item
            xs={12}
            md={8}
            className={classes.experienceItem__img}
            container
            justify="center"
          >
            <img className={classes.imgDesktop} src={vatutDesktopTab} />
            <img className={classes.imgMob} src={vatutMob} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={4}
            direction="column"
            justify="space-between"
            alignItems="center"
            className={classes.experienceItemInfo}
          >
            <h3>
              <FormattedMessage
                id="myExpirience.nv_h2"
                defaultMessage="New Vatutuinki"
              />
            </h3>
            <p>
              <FormattedMessage
                id="myExpirience.nv_p_1"
                defaultMessage="A large project of a dynamically developing district of the Moscow region."
              />
            </p>
            <p>
              <FormattedMessage
                id="myExpirience.hamovniki_p_2"
                defaultMessage="Adaptation: "
              />
              IE 10-11,Edge 16+, FireFox 54+, Chrome 58+, iOS Safari
            </p>
            <ul>
              <FormattedMessage
                id="myExpirience.hamovniki_ul"
                defaultMessage="Technologies: "
              />
              <li>PUG</li>
              <li>SCSS</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Webpack</li>
              <li>Git</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container item xs={12} className={classes.experienceItem}>
          <Grid
            item
            xs={12}
            md={8}
            className={classes.experienceItem__img}
            container
            justify="center"
          >
            <img className={classes.imgDesktop} src={atomDesktopTab} />
            <img className={classes.imgMob} src={atomMob} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={4}
            direction="column"
            justify="space-between"
            alignItems="center"
            className={classes.experienceItemInfo}
          >
            <h3>ATOM</h3>
            <p>
              <FormattedMessage
                id="myExpirience.atom_p_1"
                defaultMessage="Administrative dashboard."
              />
            </p>
            <p>
              <FormattedMessage
                id="myExpirience.hamovniki_p_2"
                defaultMessage="Adaptation: "
              />
              IE 10-11,Edge 16+, FireFox 54+, Chrome 58+, iOS Safari
            </p>
            <ul>
              <FormattedMessage
                id="myExpirience.hamovniki_ul"
                defaultMessage="Technologies: "
              />
              <li>HTML</li>
              <li>SCSS</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Webpack</li>
              <li>Git</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container item xs={12} className={classes.experienceItem}>
          <Grid
            item
            xs={12}
            md={8}
            className={classes.experienceItem__img}
            container
            justify="center"
          >
            <img className={classes.imgDesktop} src={vatutLifeDesktopTab} />
            <img className={classes.imgMob} src={vatutLifeMob} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={4}
            direction="column"
            justify="space-between"
            alignItems="center"
            className={classes.experienceItemInfo}
          >
            <h3>
              <FormattedMessage
                id="myExpirience.nvLife_h2"
                defaultMessage="New vatutuinki Life"
              />
            </h3>
            <p>
              <FormattedMessage
                id="myExpirience.nvLife_p_1"
                defaultMessage="Information multipage site on the basis of the project New vatutinki."
              />
            </p>
            <p>
              <FormattedMessage
                id="myExpirience.hamovniki_p_2"
                defaultMessage="Adaptation: "
              />
              IE 10-11,Edge 16+, FireFox 54+, Chrome 58+, iOS Safari
            </p>
            <ul>
              <FormattedMessage
                id="myExpirience.hamovniki_ul"
                defaultMessage="Technologies: "
              />
              <li>PUG</li>
              <li>SCSS</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Webpack</li>
              <li>Git</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container item xs={12} className={classes.experienceItem}>
          <Grid
            item
            xs={12}
            md={8}
            className={classes.experienceItem__img}
            container
            justify="center"
          >
            <img className={classes.imgDesktop} src={redzoneDesktopTab} />
            <img className={classes.imgMob} src={redzoneMob} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={4}
            direction="column"
            justify="space-between"
            alignItems="center"
            className={classes.experienceItemInfo}
          >
            <h3>Redzone</h3>
            <p>
              <FormattedMessage
                id="myExpirience.redzone_p_1"
                defaultMessage="Coca-Cola official partner site integrated via iframe."
              />
            </p>
            <p>
              <FormattedMessage
                id="myExpirience.redzone_p_2"
                defaultMessage="Layout, Yandex.maps functional, bugfixing."
              />
            </p>
            <p>
              <FormattedMessage
                id="myExpirience.hamovniki_p_2"
                defaultMessage="Adaptation: "
              />
              IE11, FireFox 54+, Chrome 58+, iOS Safari
            </p>
            <ul>
              <FormattedMessage
                id="myExpirience.hamovniki_ul"
                defaultMessage="Technologies: "
              />
              <li>HTML</li>
              <li>SCSS</li>
              <li>jQuery</li>
              <li>Git</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  MyExperience: {
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
  experienceItem: {
    boxShadow: "-1px 3px 17px -5px rgba(0,0,0,0.75)",
    marginBottom: 20
  },

  experienceItemInfo: {
    padding: "50px 0",
    [theme.breakpoints.down("sm")]: {
      padding: 0
    },
    "& h3, & p, & ul": {
      width: "100%"
    }
  },
  imgDesktop: {
    maxWidth: 617,
    width: "100%",
    minWidth: 300,
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  imgMob: {
    maxWidth: 617,
    width: "100%",
    minWidth: 250,
    objectFit: "contain",
    display: "none",
    border: "1px solid #cecece",
    backgroundColor: "#2e2e2e",
    [theme.breakpoints.down("xs")]: {
      display: "block"
    }
  }
});

MyExperience.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyExperience);
