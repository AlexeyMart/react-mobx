import { makeAutoObservable } from "mobx";
import { ToDoItem } from "../types";
import { v4 } from "uuid";

class Store {
  list: ToDoItem[] = [
    { title: "Wake up", done: false, id: v4() },
    { title: "Get a coffee", done: false, id: v4() },
  ];
  newToDo: string = "";

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
}

export const store = new Store();
