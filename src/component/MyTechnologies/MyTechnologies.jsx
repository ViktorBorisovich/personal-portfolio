import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

import htmlIconUrl from "../../assets/img/technologies/html.png";
import cssIconUrl from "../../assets/img/technologies/css.png";
import jsIconUrl from "../../assets/img/technologies/js.png";
import reactIconUrl from "../../assets/img/technologies/react.png";
import reduxIconUrl from "../../assets/img/technologies/redux.png";
import sassIconUrl from "../../assets/img/technologies/sass.png";
import jqueryIconUrl from "../../assets/img/technologies/jquery.png";
import bootstrapIconUrl from "../../assets/img/technologies/bootstrap.png";
import materialIconUrl from "../../assets/img/technologies/material_UI.png";
import esSixUrl from "../../assets/img/technologies/es6.png";
import webpackIconUrl from "../../assets/img/technologies/webpack.png";
import psIconUrl from "../../assets/img/technologies/ps.png";

class MyTechnologies extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, intl } = this.props;

    return (
      <Grid
        className={classNames(classes.aboutMe, classes.container)}
        container
        spacing={40}
        id = "section_1"
      >
        <Grid item xs={12}>
          <h2>
            <FormattedMessage id="technologies.h2" defaultMessage="About me" />
          </h2>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.html"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://www.w3schools.com/html/"
                target="_blank"
              >
                <img src={htmlIconUrl} />
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.css"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://www.w3schools.com/css/"
                target="_blank"
              >
                <img src={cssIconUrl} />
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.js"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://www.w3schools.com/js/"
                target="_blank"
              >
                <img src={jsIconUrl} />
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.es6"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="http://es6-features.org/"
                target="_blank"
              >
                <img src={esSixUrl} />
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.ps"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://www.adobe.com/products/photoshop.html"
                target="_blank"
              >
                <img src={psIconUrl} />
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.webpack"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://webpack.js.org/"
                target="_blank"
              >
                <img src={webpackIconUrl} />
              </a>
            </Tooltip>
          </Grid>

          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.react"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://reactjs.org/"
                target="_blank"
              >
                <img src={reactIconUrl} />
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.redux"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://redux.js.org/"
                target="_blank"
              >
                <img src={reduxIconUrl} />
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.sass"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://sass-lang.com/"
                target="_blank"
              >
                <img src={sassIconUrl} />
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.jquery"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://jquery.com/"
                target="_blank"
              >
                <img src={jqueryIconUrl} />
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.bootstrap"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://getbootstrap.com/"
                target="_blank"
              >
                <img src={bootstrapIconUrl} />
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Tooltip
              classes={{ tooltip: classes.darkTooltip }}
              title={intl.messages["technologies.material"]}
              placement="top"
            >
              <a
                className={classes.technologiesLink}
                href="https://material-ui.com/"
                target="_blank"
              >
                <img src={materialIconUrl} />
              </a>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3>
            <FormattedMessage
              id="technologies.h3_1"
              defaultMessage="Browser supporting:"
            />
          </h3>
          <p>IE 10-11, Edge 16+, FireFox 54+, Chrome 58+, iOS Safari.</p>
          <p>
            <FormattedMessage
              id="technologies.p_2"
              defaultMessage="Mobile layout, adapative, semantic, cross-browser."
            />
          </p>
          <p>
            <FormattedMessage
              id="technologies.p_3"
              defaultMessage="Sign and used the BEM naming methodology."
            />
          </p>
          <p>
            <FormattedMessage
              id="technologies.p_4"
              defaultMessage="Building grids: block model, flexbox, css-grid."
            />
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3>
            <FormattedMessage
              id="technologies.h3_2"
              defaultMessage="Additional technologies and tools:"
            />
          </h3>
          <p>
            <FormattedMessage
              id="technologies.p_5"
              defaultMessage="When making layouts I use Zeplin, Adobe illustrator."
            />
          </p>
          <p>
            <FormattedMessage
              id="technologies.p_6"
              defaultMessage="In the process of developing the layout I use the "
            />
            <a href="https://caniuse.com/" target="_blank">
              caniuse
            </a>
            .
          </p>
          <p>
            <FormattedMessage
              id="technologies.p_7"
              defaultMessage="When testing, I use the "
            />
            <a href="https://www.browserstack.com/" target="_blank">
              browserstack
            </a>
            .
          </p>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  aboutMe: {
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
  technologiesLink: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    "& img": {
      width: 80,
      height: 89,
      [theme.breakpoints.down("md")]: {
        width: 50,
        height: 59
      }
    }
  },
  darkTooltip: {
    fontSize: 13
  }
});

MyTechnologies.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(withStyles(styles)(MyTechnologies));
