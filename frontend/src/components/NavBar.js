import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Header from "./Header";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import InputTextField from "./InputTextField";
import SortSelect from "./Sort";
import Search from "./Search";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DehazeIcon from '@material-ui/icons/Dehaze';
import Loading from "./Loading";

const useStyles = makeStyles(theme => ({
    navbar: {
        color: 'grey',
        background: '#fff',
    },
    title: {
        minWidth: '5em',
        color: 'red',
        textShadow: '.1em .1em .1em grey',
        fontWeight: 'bold',
    },
    paper: {
        backgroundColor: 'white',
        width: 'auto',
        padding: '1em',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function NavBar() {
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
                        <IconButton onClick={toggleDrawer('right', true)} edge="start" color="inherit"
                                    aria-label="open drawer">
                            <DehazeIcon/>
                        </IconButton>
                        <Typography className={classes.title} variant="h5" noWrap>KidTube</Typography>
                        <SortSelect/>
                        <Search/>
                        <Loading className={classes.loading}/>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}
