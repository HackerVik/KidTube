import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Header from "./Header";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import InputTextField from "./InputField";


const useStylesLogin = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid lightgrey',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const useStyles = makeStyles({
    list: {
        width: 'auto',
    },
    fullList: {
        width: 'auto',
    },
});

export default function SwipeableTemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleOpenLogin = () => {
        setOpen(true);
    };

    const handleCloseLogin = () => {
        setOpen(false);
    };
    const classesLogin = useStylesLogin();
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
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
            role="presentation"
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
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
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
                        <h2 id="transition-modal-title">Login</h2>
                        <Divider/>
                        <InputTextField label={'Username'} helpertext={'Your username'}/>
                        <InputTextField label={'Password'} helpertext={'Your password'}/>
                    </div>
                </Fade>
            </Modal>



            <Button onClick={toggleDrawer('right', true)}>Menu</Button>
            <input type="text" placeholder="Search.."/>
            <SwipeableDrawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                {sideList('right')}
            </SwipeableDrawer>
        </div>
    );
}
