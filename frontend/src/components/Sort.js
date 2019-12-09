import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {videocontext} from "../context/VideoContext";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '.8em',
        color: 'grey',
        backgroundColor: '#fff',
        border: '1px solid lightgrey',
        borderRadius: '.3em',
        display: 'flex',
        padding: '.7em',
        width: '7em',
        height: '4em',
        '&:hover': {
            border: '2px solid lightblue',
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function Sort() {
    const classes = useStyles();
    const handleChange = event => {
        sort(event);
    };
    const {sort} = useContext(videocontext);

    return (
        <div>
            <form>
                <select defaultValue={"nameasc"} className={classes.root} onClick={(event) => handleChange(event.target.value)}>
                    <option value="nameasc">Name asc</option>
                    <option value="namedesc">Name desc</option>
                    <option value="idasc">Uploaded asc</option>
                    <option value="iddesc">Uploaded desc</option>
                </select>
            </form>
        </div>
    );
}
