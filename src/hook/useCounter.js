// Custom hook that abstracts the counter logic (state & actions)
// so components can reuse it without duplicating code

import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);
  const makeIncrement = () => setCount(count + 1);
  const makeDecrement = () => setCount(count - 1);
  return { count, makeIncrement, makeDecrement };
}
