import styles from '../StyleComponents/Home.module.css';
import Select from 'react-select';
import Categories from "../Categories";
import { useState, useEffect } from 'react';
import { MenuItem, TextField } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.png';
import ParticleBackground from './ParticleBackground';


const Home = ({ playerName, setPlayerName, fetchQuestions }) => {
    const history = useHistory();
    const [category, setCategory] = useState(9);
    const [difficulty, setDifficulty] = useState("easy");
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        if (!category || !difficulty || !playerName) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            history.push("/trivia");
        }
    };


    return (
        <div className={styles.gridContainer}>  
            <div className={styles.header}>
                <img src={logo} alt="game logo" className={styles.logoImg} />
            </div>

            <div className={styles.main}>
                <div className={styles.form}>
                    {error && <p className={styles.errorStyle}>Please fill the required fields</p>}
                    <label for="playerName" className={styles.labelStyle} style={{marginTop:'20px'}}>Player Name:</label>
                    <input type="text" id="playerName" value={playerName} onChange={(e) => setPlayerName(e.target.value)} className={styles.inputFields} required />

                    <label for="category" className={styles.labelStyle}>Category:</label>
                    <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className={styles.inputFields} required>
                        {Categories.map((c) => (
                            <option key={c.category} value={c.value}>
                                {c.category}
                            </option>
                        ))}
                    </select>

                    <label for="difficulty" className={styles.labelStyle}>Difficulty:</label>
                    <select name="difficulty" id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className={styles.inputFields} required>
                            <option key="Easy" value="easy">Easy</option>
                            <option key="Medium" value="medium">Medium</option>
                            <option key="Hard" value="hard">Hard</option>
                    </select>

                    <button onClick={handleSubmit} className={styles.buttonStyle}>Start</button>
                </div>
            </div>
            
        </div>


    )
}

export default Home;

{/* <TextField select label="Category" value={category} onChange={(e) => setCategory(e.target.value)} variant="outlined"  InputProps={{ className: styles.inputFields, }} >
                        {Categories.map((c) => (
                            <MenuItem key={c.category} value={c.value}>
                                {c.category}
                            </MenuItem>
                        ))}
                    </TextField> */}
{/* <TextField label="Your Name:" variant="outlined" onChange={(e) => setPlayerName(e.target.value)} className={styles.inputFields} InputProps={{ className: styles.inputFields, }} /> */ }

//  {/* <TextField select label="Difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} variant="outlined" InputProps={{ className: styles.inputFields, }} >
//                         <MenuItem key="Easy" value="easy">
//                             Easy
//                         </MenuItem>
//                         <MenuItem key="Medium" value="medium">
//                             Medium
//                         </MenuItem>
//                         <MenuItem key="Hard" value="hard">
//                             Hard
//                         </MenuItem>
//                     </TextField>

