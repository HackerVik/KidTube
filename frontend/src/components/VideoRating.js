import React from 'react';
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {withStyles} from '@material-ui/core/styles';


const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

function getLabelText(value) {
    return `${value} Heart${value !== 1 ? 's' : ''}`;
}

export default function VideoRating(props) {
    return (
        <div>
            <StyledRating
                name="customized-color"
                value={2}
                getLabelText={getLabelText}
                icon={<FavoriteIcon fontSize="inherit"/>}
            />
        </div>
    );
}