import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '20em',
    },
}));

export default function InputTextField(props) {
    const classes = useStyles();
    const {label, helpertext} = props;
    return (
        <div className={classes.container}>
            <div>
                <TextField
                    label={label}
                    id="outlined-margin-normal"
                    className={classes.textField}
                    helperText={helpertext}
                    margin="normal"
                    variant="outlined"
                />
            </div>
        </div>
    );
}
