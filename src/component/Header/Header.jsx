import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import SwitchLangButton from "../SwitchLangButton/SwitchLangButton.jsx";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

import logoImg from "../../assets/img/logo/logo_VB.png";
import vkImg from "../../assets/img/socialIcon/vk.png";
import facebookImg from "../../assets/img/socialIcon/facebook.png";
import skypeImg from "../../assets/img/socialIcon/skype.png";
import gmailImg from "../../assets/img/socialIcon/gmail.png";


class Header extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes, intl } = this.props;

    const navList = [
      <FormattedMessage id="nav.aboutMe" defaultMessage="About me" />,
      <FormattedMessage id="nav.technologies" defaultMessage="Technologies" />,
      <FormattedMessage id="nav.experience" defaultMessage="My experience" />,
      <FormattedMessage id="nav.contacts" defaultMessage="Contacts" />
    ];

    const IconList = [
      <AccountCircleIcon />,
      <SettingsIcon />,
      <LibraryBooks />,
      <MailIcon />
    ];

    function ListItemLink(props) {
      return <ListItem button component="a" {...props} />;
    }
    
    const fullList = (
      <div className={classes.fullList}>
        <List>
          {navList.map((text, index) => (
            <ListItemLink button key={text.props.id} href = {`#section_${index}`}>
              <ListItemIcon>{IconList[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemLink>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <a
              className={classes.socialLink}
              href="mailto:viktorbendyukov@gmail.com"
            >
              <img src={gmailImg} alt="gmail - viktorbendyukov@gmail.com" />
            </a>
            <a className={classes.socialLink} href="skype:witko95?call">
              <img src={skypeImg} alt="skype  -  witko95" />
            </a>
            {intl.locale == "en" ? (
              <a
                className={classes.socialLink}
                href="https://www.facebook.com/viktor.bendyukov.3"
                target="_blank"
              >
                <img src={facebookImg} alt="facebook - icon" />
              </a>
            ) : (
              <a
                className={classes.socialLink}
                href="https://vk.com/id31104402"
                target="_blank"
              >
                <img src={vkImg} alt="VK - icon" />
              </a>
            )}
          </ListItem>
        </List>
      </div>
    );
    const navbarList = (
      <div>
        {navList.map((text, index) => (
          <Button color="inherit" key={text.props.id + "_desktop"} href = {`#section_${index}`}>
            {text}
          </Button>
        ))}
      </div>
    );

    return (
      <div className={classes.navbar}>
        <AppBar position="fixed" className={classes.navbar_body}>
          <Toolbar>
            <a href="#" className={classes.navbarLogo}>
              <img src={logoImg} />
            </a>
            <div className={classes.sectionDesktop}>{navbarList}</div>
            <div className={classes.sectionMobile}>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer("top", true)}
              >
                <MenuIcon className={classes.icon_menu} />
              </IconButton>
            </div>

            <div className={classes.grow} />
            <SwitchLangButton />
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer("top", false)}
          classes={{ paper: classes.paper }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("top", false)}
            onKeyDown={this.toggleDrawer("top", false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navbar: {
    width: "100%",
    marginBottom: 64
  },
  navbar_body: {
    backgroundColor: "#2e2e2e",
    "& button": {
      textTransform: "none",
      fontSize: 16,
      [theme.breakpoints.down("sm")]: {
        fontSize: 18
      }
    }
  },
  container: {
    margin: "0 auto",
    width: "80%",
    maxWidth: "1200px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  icon_menu: {
    fontSize: 45
  },
  drawer: {
    top: 69
  },
  paper: {
    top: 69
  },
  navbarLogo: {
    marginRight: 25
  },
  socialLink: {
    maxHeight: 50,
    margin: 10,
    "& img": {
      width: 50
    }
  }
});

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(withStyles(styles)(withStyles(styles)(Header)));
