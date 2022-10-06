import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, incrementar, decrementar, reset } = useCounter();
  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={incrementar}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={decrementar}>
        -1
      </button>
    </>
  );
};
