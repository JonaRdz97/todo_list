import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    btn:{
        height: 40,
        width: 40,
        //backgroundColor: "#f2f2f2",
        color: "#04bf45",
        position: "absolute",
        bottom: 10,
        left: 20,
        transition: "all 0.4s ease-in",
        zIndex: 10,
        '&:hover': {
            backgroundColor: "#04bf45",
            color: "#f2f2f2"
         }
    }
})

//styles es una funcion
export default function DeleteButton({deleteCard}){
    const classes = useStyles();

    return (<IconButton className={classes.btn} onClick={deleteCard}>
                <DeleteIcon  />
            </IconButton>
    );
}

