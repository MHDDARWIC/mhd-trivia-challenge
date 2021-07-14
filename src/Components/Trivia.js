import { useEffect, useState } from "react";
import Question from "../Components/Question";
import styles from '../StyleComponents/Trivia.module.css';
import logo from '../assets/logo.png';

function Trivia({ playerName, score, questions, setQuestions, setScore }) {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        );
    }, [currQues, questions]);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    return questions ? (

        <div className={styles.gridContainer}>
            <div className={styles.header}>
                <img src={logo} alt="game logo" className={styles.logoImg} />
            </div>

            <div className={styles.main}>
                <div className={styles.info}>
                    <div className={styles.category}>
                        <p className={styles.textStyle} style={{ fontSize: '20px' }}>{questions[currQues].category}</p>
                    </div>

                    <div className={styles.score}>
                        <p className={styles.textStyle} style={{ fontSize: '20px' }}>Score: {score}</p>
                    </div>
                </div>

                <div className={styles.question}>
                    <div className={styles.actual}>
                    <Question
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={questions}
                        options={options}
                        correct={questions[currQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                    />
                    </div>
                    

                </div>
            </div >
        </div>

    ) : (
        <p>Loading...</p>
    )
}

export default Trivia;

