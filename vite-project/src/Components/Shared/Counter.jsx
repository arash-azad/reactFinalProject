import { useState } from "react";
import "../../Modules/Counter.css"
import { useCounterStore } from "../../store/useCounterStore"

export default function Counter({ id }) {
  const count = useCounterStore((state) => state.counters[id] || 0);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <div className="counterBox">
      <button className="counterBtn" onClick={() => decrease(id)}>-</button>
      <span className="counterNumber">{count}</span>
      <button className="counterBtn" onClick={() => increase(id)}>+</button>
    </div>
  );
}