import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import HeaderCard from './HeaderCard';
import TaskTitle from './TaskTitle';
import DeleteButtom from './DeleteButton';
import LabelState from './LabelState';
import LabelPriority from './LabelPriority';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../redux/reducers/toDoReducer'
import Swal from 'sweetalert2';
import ModalEditCard from './ModalEditCard'

const useStyles = makeStyles({
    card: {
            width: "100%",
            height: "100%",
            maxWidth: 450,
            maxHeight: 650,
            position: "relative",
            boxShadow: "3px 3px 2px 2px rgba(0, 0, 0, 0.2)",
            margin: "auto",
            borderRaduis: 10,
            animation: "animationCard 0.3s ease-in",
            transition: "all 0.2s ease-in",
            '&:hover': {
                transform: "scale(1.02)"
            }
        },
        hrStyle: {
          border: 0,
          height: 1,
          background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
          width: "90%",
          margin: "auto"
      },
      containerInfo: {
        margin: "0 0 70px",
        background: "white",
        paddingTop: 50,
        width: "100%"
      }
})

const ToDoCard = ({id, numberTask, title, priority, status}) =>{
    
    const classes = useStyles();
    const dispatch = useDispatch();
    
     const deleteTask = (indexCard) => {
        Swal.fire({
            title: 'Aviso',
            text: "La tarea se eliminará permanentemente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteCard(indexCard))
              Swal.fire(
                'Borrado!',
                'La tarea ha sido eliminada.',
                'success'
              )
            }
          })
    } 

    return(
        <Card className={classes.card} variant="outlined">
            <HeaderCard numberTask={numberTask}/>
            <div className={classes.containerInfo}>
                <TaskTitle title={title}/>
                <hr className={classes.hrStyle}></hr>
                <LabelPriority priority={priority} />
            </div>
            <ModalEditCard idCard={id}/>
            <DeleteButtom deleteCard={() => deleteTask(id)}/>
            <LabelState status={status}/>
        </Card>
    );
}

export default ToDoCard;