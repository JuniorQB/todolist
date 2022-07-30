import styles from './InfoTasks.module.css'

type InfoTasksProps  = {
    createdTasks: number;
    completedTasks: number;
}

export function InfoTasks({createdTasks, completedTasks}:InfoTasksProps){
    return (
        <div className={styles.panelTasks}>
            <header>
                <div>
                    <strong className={styles.blueTxt}>Tarefas criadas</strong>
                    <span>{createdTasks}</span>
                </div>
                <div>
                    <strong className={styles.purpleTxt}>Concluídas</strong>
                    <span className={styles.spanCompleted}>
                        {createdTasks > 0 
                            ? completedTasks +" de " + createdTasks
                            : "0"
                        }
                    </span>
                </div>
            </header>
        </div>
    )
}