import { h } from "dom-chef";
import { createState, JstateInstance } from "jstates";

let IDcounter = 0;
export function wrapWithId(val: any, id: string) {
  return <span class={id}>{val}</span>;
}

export function state<T>(initialValue: T): {
  state: JstateInstance<T>;
  id: string;
} {
  const state = createState<T>(initialValue);
  const id = "signal_id_" + ++IDcounter;
  return { state, id };
}

export function update(id: string, newVal: any) {
  const element = document.getElementsByClassName(id)[0];
  if (element) {
    element.replaceWith(newVal);
  }
}
