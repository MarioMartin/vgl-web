import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    titulo1: {
        paddingTop: 100,
        color: 'white',
        marginBottom: 0, 
    },
    

}));

export default function Legal() {
    const classes = useStyles();

    return (

        <div className="container-fluid">
            legal
          
        </div>
    );
}