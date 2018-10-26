import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { setLocale } from "../../store/actions.js";

class Button extends React.Component {
  handleChangeLang = () => {
    let changedtlang = this.props.lang == "en" ? "ru" : "en";
    this.props.setLocale(changedtlang);
  };
  render() {
    const { lang } = this.props;
    return (
      <div className="container">
        <IconButton
          aria-haspopup="true"
          color="inherit"
          onClick={this.handleChangeLang}
        >
          {lang == "en" ? "Ru" : "En"}
        </IconButton>
      </div>
    );
  }
}

Button.propTypes = {
  setLocale: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
}

export default connect(
  mapStateToProps,
  { setLocale }
)(Button);
