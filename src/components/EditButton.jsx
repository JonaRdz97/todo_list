import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    btn:{
        height: 40,
        width: 40,
        backgroundColor: "#f2f2f2",
        color: "#04bf45",
        position: "absolute",
        bottom: 5,
        left: 60,
        transition: "all 0.4s ease-in",
        '&:hover': {
            backgroundColor: "#04bf45",
            color: "#f2f2f2"
         }
    },
    btnLeftBottom:{
        bottom: 10,
        left: 10,
    },
    btnRightBottom:{
        bottom: 10,
        right: 10,
    }
})

//styles es una funcion

function MyButton({icon}){
    const classes = useStyles();
    return (<IconButton className={classes.btn}>
                {icon}
            </IconButton>
    );
}

export default MyButton