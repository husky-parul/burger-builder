import React from 'react';
import classes from './Backdrop'

const backdrop = ( props ) => (
     props.show ? <div style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        'z-index': '100',
        left: '0',
        top: '0',
        'background-color': 'rgba(0,0,0,0.5)'
     }}
        onClick={props.clicked}/> : null
);

export default backdrop;