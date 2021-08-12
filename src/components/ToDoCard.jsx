import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MyButton from './EditButton'; 
import EditIcon from '@material-ui/icons/Edit';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import DoneButtom from './DeleteButton';
import LabelState from '../LabelState';
import LabelPriority from './LabelPriority';

const useStyles = makeStyles({
    card: {
            overflow: "visible",
            width: "100%",
            height: "100%",
            maxWidth: 450,
            maxHeight: 750,
            //background: "#FFFFFF",
            position: "relative",
            boxShadow: "3px 3px 2px 2px rgba(0, 0, 0, 0.2)",
            margin: "auto",
            borderRaduis: 20,
            animation: "animationCard 0.3s ease-in",
            transition: "all 0.2s ease-in",
            '&:hover': {
                transform: "scale(1.02)",
                cursor: "pointer"
            }
        }
})

const ToDoCard = ({numberTask, title, priority, status}) =>{
    const classes = useStyles();
    return(
        <Card className={classes.card} variant="outlined">
            <Header numberTask={numberTask}/>
            <div style={{margin: "0 0 100px", background: "white", paddingTop: 50, width: "100%"}}>
                <TaskName title={title}/>
                <LabelPriority priority={priority} />
            </div>
            <MyButton name="Editar" icon={<EditIcon/>}/>
            <DoneButtom />
            <LabelState status={status}/>
        </Card>
    );
}

/* Componente Encabezado*/
const Header = ({numberTask}) => {
    const styles = {
        margin: "0 auto -50px",
        paddingTop: "20px",
        paddingLeft: "20px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "start",
        //background: "#FFF",
        color: "#f2f2f2",
        height: 150,
        textAlign: "center",
        fontSize: "2rem", 
        fontWeight: 300,
        background: "linear-gradient(90deg, rgba(4,191,69,0.7) 22%, rgba(63,140,90,0.7) 69%), url('/img/bg-header-card1.jpg')", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        backgroundPosition: "left top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    return <h3 style={styles}>{numberTask}</h3>
}

/* Componente Contenido */
const TaskName = ({title}) => {
    const styles = {
        fontSize: "1.1rem",
        fontWeight: 600,
        width: "80%",
        color: "#04bf45",
        textAlign: "center",
        margin: "0 auto 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    }

    return(
        <div style={styles}>
            <MessageOutlinedIcon />
            <p style={{color: "#262626"}}>{title}</p>
        </div>
    );
}

export default ToDoCard;