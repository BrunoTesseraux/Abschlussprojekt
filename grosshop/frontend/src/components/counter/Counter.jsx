const Counter = ({ count, setCount, onQuantityChange }) => {
  const addOne = () => {
    setCount(count + 1);
    onQuantityChange(count + 1);
  };

  const minusOne = () => {
    if (count > 1) {
      setCount(count - 1);
      onQuantityChange(count - 1);
    }
  };

  return (
    <div className="quantity">
      <button onClick={minusOne}>-</button>
      <p>
        {count} <span>L</span>
      </p>
      <button onClick={addOne}>+</button>
    </div>
  );
};

export default Counter;
