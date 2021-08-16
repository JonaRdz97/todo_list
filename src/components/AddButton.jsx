import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    addBtn:{
        width: 60,
        height: 60,
        position: "fixed",
        bottom: 10,
        right: 10,
        backgroundColor: "#2EA658",
        zIndex: 10,
        '&:hover': {
            backgroundColor: "#3F8C5A"
         }
    }
 })

export default function AddButton({addCard}){
    const classes = useStyles();
    return (<div>
                <Fab onClick={addCard} className={classes.addBtn} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>);
}