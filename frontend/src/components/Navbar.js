import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Header from "./Header";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import InputTextField from "./InputField";
import SortSelect from "./SortSelect";
import SearchBar from "./SearchBar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import DehazeIcon from '@material-ui/icons/Dehaze';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    navbar: {
        color: 'grey',
        background: '#fff',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        color: 'red',
        fontWeight: 'bold',
        fontSize: '1.8em',
        textShadow: '.1em .1em .1em grey',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function SwipeableTemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
    const handleOpenLogin = () => {
        setOpen(true);
    };
    const handleCloseLogin = () => {
        setOpen(false);
    };
    const classesLogin = useStyles();
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [side]: open});
    };
    const sideList = side => (
        <div
            className={classes.list}
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <Header/>
            <Divider/>
            <List>
                <ListItem onClick={handleOpenLogin} button key="Login">
                    <ListItemText primary="Login"/>
                </ListItem>
                <ListItem button key="Logout">
                    <ListItemText primary="Logout"/>
                </ListItem>
                <ListItem button key="Register">
                    <ListItemText primary="Register"/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Modal
                aria-labelledby="login-modal"
                className={classesLogin.modal}
                open={open}
                onClose={handleCloseLogin}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classesLogin.paper}>
                        <h2 id="login-modal">Login</h2>
                        <Divider/>
                        <InputTextField label={'Username'} helpertext={'Your username'}/>
                        <InputTextField label={'Password'} helpertext={'Your password'}/>
                    </div>
                </Fade>
            </Modal>
            <SwipeableDrawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                {sideList('right')}
            </SwipeableDrawer>
            <div className={classes.grow}>
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer('right', true)}
                        >
                            <DehazeIcon/></IconButton><MenuIcon/>
                        <Typography className={classes.title} variant="h6" noWrap>KidTube</Typography>
                        <SortSelect/>
                        <SearchBar/>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}
