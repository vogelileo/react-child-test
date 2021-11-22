const ChildComponent = (props) => {
  return (
    <>
      <h1>Child</h1>
      <button onClick={(e) => props.onButtonClick(e)}>My Button</button>
    </>
  );
};

export default ChildComponent;
