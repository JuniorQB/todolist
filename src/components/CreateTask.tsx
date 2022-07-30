import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './CreateTask.module.css';
import {  v4  as uuid} from 'uuid';
import { TaskProps } from '../App'

interface CreateTaskProps {
    createNewTask: (({id, description}:TaskProps) => void)
}

export function CreateTask({createNewTask}: CreateTaskProps){
    const [newTask, setNewTask] = useState('')

    function handleNewTask(event:ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
       
    }

    function handleCreateNewComment(event:FormEvent){
        event.preventDefault()
        const nTaskTemp:TaskProps = {
            id:uuid(), 
            isCompleted: false,
            description: newTask
         }
         
         createNewTask(nTaskTemp);
        setNewTask('')
        
    }

    function handleTaskInvalid(event:InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity("Campo obrigatório!")
    }

    return (
        <form className={styles.formTask} onSubmit={handleCreateNewComment} >
            <input 
                type="text" 
                name="newTask" 
                autoComplete='off'
                placeholder='Digite uma tarefa'
                value={newTask}
                onChange={handleNewTask}
                onInvalid={handleTaskInvalid}
                required
            />
            <button type="submit">
                Criar <PlusCircle size={16}/>  
            </button>
        </form>
    )
}