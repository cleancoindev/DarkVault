/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";
import TranslateIcon from '@material-ui/icons/Translate';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const options = [
  "English",
  "中文",
  "日本語",
  "ไทย",
];

export default function HeaderLinks(props) {
  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonIcon={TranslateIcon}
          buttonText="Dropdown"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          onClick={e=>console.log(e)}
          dropdownList={[
            "English",
            "中文",
            "日本語",
            "ไทย",
            { divider: true },
            <a
              href="https://github.com/yfii/vault/tree/master/src/locales"
              target="_blank"
            >
              Help to translate
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={
            classes.navLink + " " + classes.socialIconsButton
          }
          href="#contained-buttons"
        >
          <i
            className={
              classes.socialIcons +
              " " +
              classes.marginRight5 +
              " fab fa-twitter"
            }
          />{" "}
          Twitter
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={
            classes.navLink + " " + classes.socialIconsButton
          }
        >
          <i
            className={
              classes.socialIcons +
              " " +
              classes.marginRight5 +
              " fab fa-facebook"
            }
          />{" "}
          Facebook
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={
            classes.navLink + " " + classes.socialIconsButton
          }
        >
          <i
            className={
              classes.socialIcons +
              " " +
              classes.marginRight5 +
              " fab fa-instagram"
            }
          />{" "}
          Instagram
        </Button>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
