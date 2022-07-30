import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css'

interface TaskProps {
  description: string;
  id:string;
  isCompleted: boolean;
  completeTask: ((id:string) => void)
  deleteTask: ((id:string) => void)
}

export function Task({description, id, isCompleted,completeTask, deleteTask}:TaskProps) {

  function handleCheckCompleteTask(){
    completeTask(id)
  }

  return (
    <div 
      className={
          `${styles.card} 
           ${isCompleted 
           ? styles.cardCompleted 
           : styles.cardNotCompleted
          }`
        } >
        <button 
          className={styles.checkComplete} 
          type='button' 
          onClick={handleCheckCompleteTask}
        >
          {
            isCompleted 
            ?<div className={styles.checkCompleted}><Check/></div>
            :<div className={styles.checkNotCompleted}></div>
          }
        </button>
        <span 
          className={
            isCompleted 
            ? styles.descriptionCompleted 
            : styles.descriptionNotCompleted}
          >
            {description}
          </span>
        <button className={styles.buttonDelete} title='Deletar Comentário' onClick={() => deleteTask(id)}>
           <Trash size={24} />
        </button>
    </div>
  );
  
}