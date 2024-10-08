import { useState } from "react";
import Display from "./Display";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(() =>
    new Array(anecdotes.length).fill(0)
  );
  const clickHandle = () => {
    let randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };
  const voteHandle = () => {
    const newArray = [...points]; // Create a copy of the array to avoid direct mutation
    newArray[selected] += 1; // Modify the array
    setPoints(newArray); // Update the state with the modified array
  };
  console.log(points);
  return (
    <div>
      {anecdotes[selected]}
      {<br />}
      {<button onClick={voteHandle}>Vote</button>}
      {<button onClick={clickHandle}>next anecdotes</button>}
      {<p>Aneddote with most votes</p>}
      {/* { anecdotes [points.indexOf(Math.max(...points))]}{" "} */}
      <Display anecdotes={anecdotes} index={points.indexOf(Math.max(...points))} max= {Math.max(...points)}/>
      
    </div>
  );
};

export default App;
