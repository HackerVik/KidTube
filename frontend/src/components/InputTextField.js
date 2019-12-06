import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    textField: {
        width: 'auto',
    },
}));

export default function InputTextField(props) {
    const classes = useStyles();
    const {label, helpertext} = props;
    return (
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
    );
}
