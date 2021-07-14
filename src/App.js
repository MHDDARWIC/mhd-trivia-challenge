import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Trivia from "./Components/Trivia";
import Results from "./Components/Results";
import { useState, useEffect } from 'react';
import axios from "axios";
import Particles from "react-particles-js";
import Test from "./Components/Test.js";



function App() {

  //Shared Stuff
  const [playerName, setPlayerName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    setQuestions(data.results);
  }
  return (
    
      
      <BrowserRouter>
      
        <Switch>
          <Route exact path="/"><Home playerName={playerName} setPlayerName={setPlayerName} fetchQuestions={fetchQuestions} /></Route>
          <Route exact path="/trivia"><Trivia playerName={playerName} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} /></Route>
          <Route exact path="/result"><Results playerName={playerName} score={score} setScore={setScore} /></Route>
          <Route exact path="/test"><Test /></Route>
        </Switch>
      </BrowserRouter>

   








  );
}

export default App;
