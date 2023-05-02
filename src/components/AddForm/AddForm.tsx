import { FC, ChangeEvent } from "react";
import { store } from "../../store/todo";
import { Input, Button } from "antd";
import { observer } from "mobx-react";
import "./AddForm.css";

const AddFormBase: FC = () => {
  const { newToDo, setNewToDo, addToDo } = store;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setNewToDo(event.target.value);

  const handleAddToDo = () => addToDo(newToDo);

  return (
    <div className="AddForm">
      <Input
        value={newToDo}
        onChange={handleChange}
        onPressEnter={handleAddToDo}
      />

      <Button type="primary" onClick={handleAddToDo}>
        Add
      </Button>
    </div>
  );
};

export const AddForm = observer(AddFormBase);
