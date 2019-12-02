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
import SortSelect from "./SortSelect";
import SearchBar from "./SearchBar";
import Logo from "./Logo";


const useStyles = makeStyles(theme => ({
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
    list: {
        width: 'auto',
        align: 'center'
    },
    fullList: {
        width: 'auto',
        align: 'center'
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
            <div>
                <Logo/>
                <Button disableFocusRipple={true} fullWidth={true} size={"large"} variant={"outlined"}
                            onClick={toggleDrawer('right', true)}>Menu</Button>
                <SortSelect/>
                <SearchBar/>
            </div>
        </div>
    );
}
