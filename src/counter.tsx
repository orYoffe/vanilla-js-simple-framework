import { h } from "dom-chef";
import { wrapWithId, update, state } from "./state.tsx";

const { state: count, id: stateId } = state({ counter: 0 });

function increment() {
  count.setState((state: typeof count.state) => ({
    counter: ++state.counter,
  }));
}
function decrement() {
  count.setState((state: typeof count.state) => ({
    counter: --state.counter,
  }));
}
export function Counter() {
  function onUpdate(state: typeof count.state) {
    update(stateId, wrapWithId(state.counter, stateId));
  }

  count.subscribe(onUpdate);

  return (
    <div>
      <p>count is {wrapWithId(count.state.counter, stateId)}</p>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
    </div>
  );
}
