/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { NavLink } from "react-router-dom";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <NavLink to="/admin/dashboard" className={classes.block}>
                Inicio
              </NavLink>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <NavLink to="/admin/hardware" className={classes.block}>
                Hardware & PCs
              </NavLink>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <NavLink to="/admin/games" className={classes.block}>
                Juegos (Steam/Eneba)
              </NavLink>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <NavLink to="/admin/bundles" className={classes.block}>
                Promos & Bundles
              </NavLink>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <NavLink to="/admin/cart" className={classes.block}>
                Carrito
              </NavLink>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; 2026{" "}
            <strong>NexusTech & Gaming</strong> | Proyecto de <strong>Angel Romero</strong> (Electiva III) -{" "}
            <a
              href="https://github.com/Gabo-1223"
              target="_blank"
              rel="noreferrer"
              className={classes.a}
            >
              GitHub: @Gabo-1223
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
