import { h } from "dom-chef";
import { wrapWithId, update, state } from "./state.tsx";

interface TodoState {
  todos: string[];
}
const { state: todosState, id: stateId } = state<TodoState>({
  todos: [],
});
export function Todos() {
  function removeTodo(todo: string) {
    todosState.setState((s: typeof todosState.state) => ({
      todos: s.todos.filter((t: string) => t !== todo),
    }));
    update(
      stateId,
      wrapWithId(todosState.state.todos.map(createTodo), stateId)
    );
  }
  const createTodo = (t: string) => (
    <div>
      <button style={{ marginRight: "5px" }} onClick={() => removeTodo(t)}>
        X
      </button>
      {t}
    </div>
  );

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    todosState.setState((s: typeof todosState.state) => ({
      todos: s.todos.concat(form.new_task_input?.value),
    }));
    form.new_task_input.value = "";
    update(
      stateId,
      wrapWithId(todosState.state.todos.map(createTodo), stateId)
    );
  };

  return (
    <div>
      <form id="new_task_form" onSubmit={submit}>
        <input
          required
          type="text"
          name="new_task_input"
          id="new_task_input"
          placeholder="Create New Task"
          value=""
        />
        <button
          id="new_task_input_btn"
          type="submit"
          style={{ marginLeft: "5px" }}
        >
          Add
        </button>
      </form>
      <section style={{ textAlign: "left" }}>
        <h3>Todos:</h3>
        <div style={{ display: "inline-block" }}>
          {wrapWithId(todosState.state.todos.map(createTodo), stateId)}
        </div>
      </section>
    </div>
  );
}
