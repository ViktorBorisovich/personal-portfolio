import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ReactMapboxGl from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import { FormattedMessage } from "react-intl";

import mapIcon from "../../assets/img/map/mapIcon.png";

class MyLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Map = ReactMapboxGl({
      accessToken:
        "pk.eyJ1Ijoid2l0a28xMDA1MDAiLCJhIjoiY2puYmV4bWN1MDNpODNwcjd2cThvZ2NiOCJ9.PwwjuYk5s4mcQr2HWh1VnA"
    });
    const { classes } = this.props;

    return (
      <Grid container item xs={12} md={6}>
        <h2>
          <FormattedMessage id="myLocation.h2" defaultMessage="My location" />
        </h2>
        <Grid container justify="center">
          <Map
            style="mapbox://styles/mapbox/dark-v9"
            containerStyle={{
              height: "50vh",
              width: "80vw"
            }}
            center={[20.5105, 54.7066]}
            zoom={[8]}
          >
            <Marker coordinates={[20.5105, 54.7066]} anchor="bottom">
              <img className={classes.mapIcon} src={mapIcon} />
            </Marker>
          </Map>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  column: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto"
  },
  mapIcon: {
    width: 70
  }
});

MyLocation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyLocation);
