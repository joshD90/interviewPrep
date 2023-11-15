const Actions = ({ clickAction }) => {
    return (
      <div className="actions">
        <button onClick={() => clickAction("right")}>{">"}</button>
        <button onClick={() => clickAction("left")}>{"<"}</button>
      </div>
    );
  };
  
  export default Actions;
  