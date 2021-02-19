import { AppBar, Toolbar } from "@material-ui/core";
import { Business } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import HeaderLink from './HeaderLink'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "static",
        backgroundColor: "#9287c4", //625a8a    c4bbed
    },
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

export default function Header(props) {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <HeaderLink to="about" title="About" icon={<Business className={classes.icon} />} />
                <HeaderLink to="work" title="Work" icon={<Business className={classes.icon} />} />
                <HeaderLink to="contact" title="Contact" icon={<Business className={classes.icon} />} />
            </Toolbar>
        </AppBar>
    )
}