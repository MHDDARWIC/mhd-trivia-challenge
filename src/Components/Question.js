import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import styles from '../StyleComponents/Question.module.css';
import "../StyleComponents/Question.css";

function Question({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions,
}) {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const history = useHistory();
   

    function correctSpelling(str) {
        var temp = str;
        if (temp.includes("&quot;") ||(temp.includes("&#039;")) ) {
            temp= temp.replaceAll("&quot;", "'");
            temp=  temp.replaceAll("&#039;", "'");
        } else if (temp.includes("&amp;")) {
            temp=  temp.replaceAll("&amp;", "&");
        }else if(temp.includes("&eacute;")) {
            temp=  temp.replaceAll("&eacute;", "é");
        }

        return temp;

    }
    const handleSelect = (i) => {
        if (selected === i && selected === correct) return "select";
        else if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "select";
        else if(i!== correct) return "wrong";
      };



    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct){
            setScore(score + 1);
        }
        setError(false);
    };

    const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
        setScore(0);
        history.push('/');
    };


    const handleNext = () => {
        if (currQues > 8) {
            history.push("/result");
        } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
        } else setError("Please select an option first");
    };
    return (
        <div className={styles.gridContainer}>
            <div className={styles.desc}>
                <p className={styles.textStyle} style={{fontSize:'20px'}}>Question {currQues + 1}/10</p>
                <p className={styles.textStyle}>{correctSpelling(questions[currQues].question)}</p>

                {error && <p className={styles.errorStyle}>Please select an option</p>}
            </div>

            <div className={styles.buttons}>
                {options &&
                    options.map((i) => (
                        <button
                        className={styles.buttonStyle}
                            className={`buttonStyle ${selected && handleSelect(i)}`}
                            key={i}
                            onClick={() => handleCheck(i)}
                            disabled={selected}
                            
                        >
                            {correctSpelling(i)}
                        </button>
                    ))}

            </div>

            <div className={styles.navigation}>
                <button onClick={handleQuit} className={styles.navButtons} style={{ backgroundColor: '#ff1491a6' }}>Quit </button>
                <button onClick={handleNext} className={styles.navButtons}> {currQues > 20 ? "Submit" : "Next"}</button>
            </div>
        </div>
        
        

    )
}

export default Question;

