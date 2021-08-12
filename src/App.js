import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './header'
import ToDoCard from './components/ToDoCard';
import AddButton from './components/AddButton'
import EmptyDataAdvice from './components/EmptyDataAdvice'
import getTasks from './Provider';
import { useDispatch, useSelector } from 'react-redux';
import {setToDoCards} from './redux/reducers/toDoReducer'

function App() {
  const [idCard, setIdCard] = useState(0)
  const tasks = useSelector((state) => state.toDoCard);
  const dispatch = useDispatch();

  console.table(tasks);

  const getListTask = async () => {
    const response = await getTasks();
    const listTask = response.data.map((task) => (
      <ToDoCard key={task.id} numberTask={`Tarea #${task.id}`} title={task.title} priority={task.prioridad} status={task.active}/>
    ));
    dispatch(setToDoCards(listTask));
    setIdCard(response.data.length + 1);
  } 

  useEffect(() => {
    getListTask();
  }, []);

  const addCard = () => {
    setIdCard(idCard + 1)
    const list = [...tasks, <ToDoCard key={idCard} numberTask={`Tarea #${idCard}`} title="Algo que hacer" priority="baja" status={true}/>]
    dispatch(setToDoCards(list));
  }

  //addCard={dispatch(setToDoCards(addCard()))}
  return (
    <div className="App">
      <Header/>
      <div className="cards-container">
        {tasks}
        { idCard === 0 && <EmptyDataAdvice/>}
      </div>
      <AddButton addCard={() => addCard()} /> 
    </div>
  );
}

export default App;
