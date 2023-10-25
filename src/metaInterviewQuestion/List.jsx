const List = ({ side, state, setState }) => {
  const handleCheck = (e) => {
    setState((prev) =>
      prev.map((item) => {
        if (item.itemValue === parseInt(e.target.id, 10))
          return { ...item, readyToTransfer: e.target.checked };
        return item;
      })
    );
  };

  return (
    <div className="list">
      {state.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={item.itemValue}
            onChange={handleCheck}
            checked={item.readyToTransfer}
          />
          <label htmlFor={item.itemValue}>{item.itemValue}</label>
        </div>
      ))}
    </div>
  );
};

export default List;
