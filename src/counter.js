import Button from "./common-button";
import useCounter from "./hook/useCounter";

function Counter() {
  const { count, makeIncrement, makeDecrement } = useCounter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <h1>This counter demonstrates abstraction using a custom React hook.</h1>

      <li>
        <strong>Abstraction</strong> means hiding complex logic and showing only
        what is necessary.
      </li>
      <li>
        In this example, the counter logic (state and increment/decrement
        functions) is hidden inside a custom hook called <code>useCounter</code>
        .
      </li>
      <li>
        The <em>App</em> component only uses the values and functions it needs,
        keeping the UI simple and reusable.
      </li>

      <div>
        <Button onClick={makeDecrement} buttonText={"-"} />
        <span style={{ margin: "0 10px", fontWeight: "bold" }}>{count}</span>
        <Button onClick={makeIncrement} buttonText={"+"} />
      </div>
    </div>
  );
}

export default Counter;
