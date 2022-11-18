import styles from "./GameContainer.module.css"

export default function GameContainer(){

    return(
        <div className={styles.gameContainer}>
            <button className={styles.gameModeButton}>Easy</button>
            <button className={styles.gameModeButton}>Hard</button>
        </div>
    )
}

