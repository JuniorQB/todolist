import { useState } from 'react'
import { Header } from './components/Header'
import styles from './App.module.css';
import { CreateTask } from './components/CreateTask';
import { InfoTasks } from './components/InfoTasks';
import clipboard from '../src/assets/clipboard.svg';
import { Task } from './components/Task';

import './global.css'

export interface TaskProps  {
  id: string;
  isCompleted:boolean;
  description:string;
}


function App() {


  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completeTasks, setCompleteTasks] = useState(0);

  function handleSetNewTask(newTask:TaskProps){
    setTasks([...tasks, newTask]);

  }

  function handleCompleteTask(id:string){
    const taskTemp = tasks.filter(task => {
      if(task.id === id){
        task.isCompleted = !task.isCompleted;
      }
      return task;
    })

    const countTaskComplete = taskTemp.filter(task => {
      return task.isCompleted === true;
    })
    setCompleteTasks(countTaskComplete.length);
    
   
    setTasks(taskTemp);
  }



  function handleDeleteTask(id:string){
    
    const taskTemp = tasks.filter(task => {
      return task.id !== id
    })
    
    const countTaskComplete = taskTemp.filter(task => {
      return task.isCompleted === true;
    })
    setCompleteTasks(countTaskComplete.length);

    setTasks(taskTemp);
  }

  return (
    <div>
        <Header/>
        <main className={styles.wrapper}>
          <CreateTask createNewTask={handleSetNewTask}/>
          <InfoTasks createdTasks={tasks.length} completedTasks={completeTasks}/>
          <div className={styles.panelTask}>
          {
            tasks.length > 0 
              ? 
              tasks.map(c => {
                  return ( 
                    <Task 
                      key={c.id} 
                      isCompleted={c.isCompleted} 
                      description={c.description} 
                      id={c.id} 
                      completeTask={handleCompleteTask}
                      deleteTask={handleDeleteTask}
                    /> 
                  )
                })
                
              : <div className={styles.emptyTask}>
                  <img src={clipboard} alt="Clipboard" />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>  
          }
          </div>
        </main>
      
    </div>
  )
}

export default App
