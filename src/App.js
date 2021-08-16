import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header'
import ToDoCard from './components/ToDoCard';
import EmptyDataAdvice from './components/EmptyDataAdvice'
import ModalAddCard from './components/ModalAddCard';
import getTasks from './Provider';
import { useDispatch, useSelector } from 'react-redux';
import {setToDoCards} from './redux/reducers/toDoReducer'

function App() {

  const tasks = useSelector((state) => state.toDoCard);
  const dispatch = useDispatch();

  /** Consumo de API*/
  const getListTask = async () => {
    const response = await getTasks();
    dispatch(setToDoCards(response.data));
  } 

  useEffect(() => {
    getListTask();
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className="cards-container">
        {tasks.map((task, index) => (
          <ToDoCard key={task.id} id={task.id} numberTask={index+1} title={task.title} priority={task.prioridad} status={task.active}/>
        ))}
        {tasks.length === 0 && <EmptyDataAdvice/>}
      </div>
      <ModalAddCard/>      
    </div>
  );
}

export default App;