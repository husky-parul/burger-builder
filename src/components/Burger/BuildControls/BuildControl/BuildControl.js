import React from 'react';
import classes from './BuildControl';

const buildControl = ( props ) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Label}
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
        <button className={classes.More}
            onClick={props.added}>More</button>
    </div>
);

export default buildControl;