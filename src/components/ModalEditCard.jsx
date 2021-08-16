import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MyButton from './EditButton';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import {updateCard} from '../redux/reducers/toDoReducer'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: 'absolute',
    width: 400,
    height: 400,
    top: "calc(50% - 200px)",
    left: "calc(50% - 200px)",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    width: "60%",
    margin: "20px auto",
    display: "block"
  },
  btnCreate:{
    width: 90,
    height: 70,
    display: "block",
    backgroundColor: "#2EA658",
    border: "none",
    color: "#f2f2f2",
    fontSize: ".9rem",
    fontWeight: 600,
    borderRadius: 5,
    '&:hover': {
        cursor: "pointer",
        backgroundColor: "#3F8C5A"
     }
    },
    select: {
        width: "100%"
    }
}));

export default function ModalEditCard({idCard}) {
  const tasks = useSelector((state) => state.toDoCard);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleOpen = () => {
    const my = tasks.find((element) => {
        return idCard === element.id
    })
    setOpen(true);
    setName(my.title);
    setPriority(my.prioridad);
    setStatus(my.active);
  };

  const handleClose = () => {
    setPriority('');
    setStatus('');
    setName('');
    setOpen(false);
  };
  
  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeName = (event) => {
      setName(event.target.value);
  }

  const handleClick = () => {
      dispatch(updateCard({id: idCard, title: name, prioridad: priority, active: status}))
      handleClose();
  }

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Editar Tarea</h2>
      <TextField onChange={handleChangeName} className={classes.formControl} id="simple-modal-outlined-basic" label="Nombre" variant="outlined" defaultValue={name}/>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Prioridad</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={priority}
          onChange={handleChangePriority}
          label="Prioridad"
          className={classes.select}
        >
          <MenuItem value={"baja"}>Baja</MenuItem>
          <MenuItem value={"media"}>Media</MenuItem>
          <MenuItem value={"alta"}>Alta</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel id="dlabel">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={status}
          onChange={handleChangeStatus}
          label="Estado"
          className={classes.select}
        >
          <MenuItem value={true}>En proceso</MenuItem>
          <MenuItem value={false}>Terminada</MenuItem>
        </Select>
      </FormControl>
      <button className={classes.btnCreate} onClick={handleClick}>Actualizar</button>
    </div>
  );

  return (
    <div>
        <MyButton editCard={() => handleOpen()} icon={<EditIcon/>} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}