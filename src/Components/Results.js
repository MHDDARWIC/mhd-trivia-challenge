import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import styles from '../StyleComponents/Results.module.css';


function Results({ playerName, score,setScore }) {
    const history = useHistory();
    const [performance,setPerformance]=useState();

    function handleQuit(){
        setScore(0);
        history.push('/')

    }
    useEffect(() => {
        checkPerformance();
        if (!playerName) {
            history.pushState('/');
        }

    }, [playerName, history])

    function checkPerformance(){
        if(score<=3){
            setPerformance("Practice makes perfect, ");
        } else if(score >3 && score<=5){
            setPerformance("Not bad, ");
        } else if(score>5 && score<=7){
            setPerformance("Nice job, ");
        } else if(score>7){
            setPerformance("Great job, ");
        }
    }
    return (
        <div className={styles.gridContainer}>
            <div className={styles.main}>
                <p className={styles.textStyle}>{performance} {playerName}</p>
                <p className={styles.textStyle}>Final Score: {score}</p>

                <div className={styles.buttons}>
                    <button className={styles.buttonStyle} style={{ backgroundColor: "#ff1491a6" }} onClick={handleQuit}>Play Again?</button>
                </div>

            </div>


        </div>
    )
}

export default Results;