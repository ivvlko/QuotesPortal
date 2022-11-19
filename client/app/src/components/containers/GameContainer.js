import styles from "./GameContainer.module.css"
import { Link  } from "react-router-dom";

export default function GameContainer(){

    return(
        <div className={styles.gameContainer}>
            <Link  to="/play/easy-game" className={styles.gameModeButton}>Easy</Link>
            <Link to="/" className={styles.gameModeButton}>Hard</Link>
        </div>
    )
}

