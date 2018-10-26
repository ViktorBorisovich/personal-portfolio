import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

class SendEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ""
    };

    this.handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };

    this.handleSubmit = event => {
      if (+this.state.messageText.length > 250) event.preventDefault();
    };
  }
  render() {
    const { classes, intl } = this.props;

    return (
      <Grid className={classes.container} container item xs={12} spacing={40}>
        <Grid item xs={12}>
          <h2>
            <FormattedMessage
              id="sendEmail.h2"
              defaultMessage="When testing, I use the "
            />
          </h2>
        </Grid>

        <form
          className={classes.form}
          autoComplete="on"
          method="POST"
          action="https://formspree.io/viktorbendyukov@gmail.com"
          onSubmit={this.handleSubmit}
        >
          <TextField
            id="outlined-name"
            name="email"
            label="Email"
            type="email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            id="outlined-name"
            name="name"
            label={intl.messages["sendEmail.name"]}
            type="text"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            id="outlined-multiline-static"
            name="message"
            label={intl.messages["sendEmail.message"]}
            multiline
            rows="4"
            onChange={this.handleChange("messageText")}
            value={this.state.messageText}
            className={classes.textField}
            helperText={this.state.messageText.length + "/250"}
            margin="normal"
            error={+this.state.messageText.length > 250 && true}
            variant="outlined"
            required
          />
          <Button variant="outlined" type="submit" className={classes.button}>
            {intl.messages["sendEmail.send"]}
          </Button>
        </form>
      </Grid>
    );
  }
}

const styles = theme => ({
  container: {
    margin: "0 auto",
    width: "80%",
    maxWidth: "1200px",
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    minWidth: 270
  }
});

SendEmail.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(withStyles(styles)(withStyles(styles)(SendEmail)));
