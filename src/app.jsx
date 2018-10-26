import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./assets/css/global.scss";

import { IntlProvider } from "react-intl";

import Header from "./component/Header/Header.jsx";

import AboutMe from "./component/AboutMe/AboutMe.jsx";
import MyTechnologies from "./component/MyTechnologies/MyTechnologies.jsx";
import MyExperience from "./component/MyExperience/MyExperience.jsx";
import ContactMe from "./component/ContactMe/ContactMe.jsx";
import SendEmail from "./component/SendEmail/SendEmail.jsx";
import Footer from "./component/Footer/Footer.jsx";

import messages from "./messages.js";

class App extends React.Component {
  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="container">
          <Header />
          <AboutMe />
          <MyTechnologies />
          <MyExperience />
          <SendEmail />
          <ContactMe />
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  lang: PropTypes.string.isRequired
};

  function mapStateToProps(state) {
    return {
      lang: state.locale.lang,
    }
  }

export default connect(mapStateToProps)(App);
