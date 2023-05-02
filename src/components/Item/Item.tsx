import { FC } from "react";
import { ToDoItem } from "../../types";
import { Checkbox, Typography, Button } from "antd";
import { store } from "../../store/todo";
import "./Item.css";

export const Item: FC<ToDoItem> = ({ title, id, done }) => {
  const { toggleDone, removeToDo } = store;

  const handleToggleDone = () => toggleDone(id);
  const handleRemove = () => removeToDo(id);

  return (
    <div className="Item">
      <Typography.Title
        level={3}
        className="Item__title"
        style={{ textDecoration: done ? "line-through" : "" }}
      >
        {title}
      </Typography.Title>
      <Checkbox
        className="Item__checkbox"
        checked={done}
        onChange={handleToggleDone}
      />
      <Button className="Item__button" danger onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
};
