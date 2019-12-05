import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {videocontext} from "../context/VideoContext";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
    const [state, setState] = React.useState({
        sort: '',
        name: 'hai',
    });
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const {sort} = useContext(videocontext);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    function handleSearch(value) {
        sort(value);
    }

    return (
        <div className={classes.root}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    Sort by
                </InputLabel>
                <Select
                    native
                    onChange={handleChange('age')}
                    onClick={(e) => handleSearch(e.target.value)}
                    labelWidth={labelWidth}
                >
                    <option value="nameasc">Name asc</option>
                    <option value="namedesc">Name desc</option>
                    <option value="idasc">Uploaded asc</option>
                    <option value="iddesc">Uploaded desc</option>
                </Select>
            </FormControl>
        </div>
    );
}
