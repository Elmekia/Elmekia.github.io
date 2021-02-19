import { Button, Hidden } from "@material-ui/core";
import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
  },
  menuButton: {
      marginRight: theme.spacing(2),
  },
  title: {
      flexGrow: 1,
  },
}));

export default function HeaderLink(props) {
    const classes = useStyles();
  
    return (
      <Fragment>
        <Hidden only="xs">
          <Link to={props.to} spy={true} smooth={true} offset={-66}>
            <Button color="inherit" className={classes.linkButton}>
              {props.title}
            </Button>
          </Link>
        </Hidden>
        <Hidden smUp>
          <Link
            to={props.to}
            spy={true}
            smooth={true}
            offset={-56}
            className={classes.linkIcon}
          >
            {props.icon}
          </Link>
        </Hidden>
      </Fragment>
    );
  }
