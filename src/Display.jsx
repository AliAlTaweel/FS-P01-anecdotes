const Display = (props) => {
  return (
    <>
      {props.anecdotes[props.index]}
      {<p> Has {props.max} votes</p>}
    </>
  );
};

export default Display;
