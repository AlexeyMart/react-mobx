import { makeAutoObservable } from "mobx";
import { ToDoItem } from "../types";
import { v4 } from "uuid";

const initialTodos: ToDoItem[] = [
  { title: "Wake up", done: false, id: v4() },
  { title: "Get a coffee", done: false, id: v4() },
];

class Store {
  list: ToDoItem[] = [];
  newToDo: string = "";
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public setNewToDo = (newToDo: string) => {
    this.newToDo = newToDo;
  };

  public toggleDone = (id: ToDoItem["id"]) => {
    const element = this.list.find((item) => item.id === id);

    if (!element) {
      return;
    }

    element.done = !element.done;
  };

  public removeToDo = (id: ToDoItem["id"]) => {
    this.list = this.list.filter((item) => item.id !== id);
  };

  public addToDo = (title: ToDoItem["title"]) => {
    this.list.push({ title, id: v4(), done: false });
    this.newToDo = "";
  };

  public fetchInitialData = async () => {
    this.loading = true;

    const result: ToDoItem[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(initialTodos);
      }, 1500);
    });

    this.list = result;
    this.loading = false;
  };
}

export const store = new Store();
