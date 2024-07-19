import "./style.css";

import { h } from "dom-chef";

const BASE_URI = "/vanilla-js-simple-framework";
const TODOS_PATH = BASE_URI + "/todos";
const COUNTER_PATH = BASE_URI + "/counter";

// fix for JSX class attribute
declare global {
  namespace React {
    interface DOMAttributes<T> {
      class?: string;
    }
  }
}

// stop links from refreshing the page
document.addEventListener("click", function (e) {
  if (
    e.target instanceof HTMLAnchorElement &&
    e.target.href.startsWith(window.location.origin)
  ) {
    e.preventDefault();
  }
});
function navigateTo(path: string) {
  window.history.replaceState({}, "", path);
  render();
}

export async function render() {
  let Page: () => JSX.Element;
  switch (window.location.pathname) {
    case TODOS_PATH:
      Page = await import("./todos").then(({ Todos }) => Todos);
      break;
    case COUNTER_PATH:
      Page = await import("./counter").then(({ Counter }) => Counter);
      break;
    default:
      Page = await import("./counter").then(({ Counter }) => Counter);
  }

  const el = (
    <div id="app">
      <h1>Simple vanilla js framework example</h1>
      <p>
        Including TypeScript, JSX, State updates, Templating, Routing, code
        splitting.. What else do you need? <br />
        Ok.. go ahead and add tailwind or another css lib..
      </p>
      <nav>
        <a
          href="/counter"
          onClick={() => {
            navigateTo(COUNTER_PATH);
            return false;
          }}
        >
          Counter
        </a>
        <a
          href="/todos"
          onClick={() => {
            navigateTo(TODOS_PATH);
            return false;
          }}
        >
          Todos
        </a>
        <a
          target="_blank"
          href="https://github.com/orYoffe/vanilla-js-simple-framework"
        >
          Github repo 🔗
        </a>
      </nav>
      <div class="card">
        <Page />
      </div>
    </div>
  );

  document.getElementById("app")!.replaceWith(el);
}
