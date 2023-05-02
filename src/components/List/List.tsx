import { FC } from "react";
import { store } from "../../store/todo";
import { observer } from "mobx-react";
import { Item } from "../Item/Item";
import "./List.css";

const ListBase: FC = () => {
  const { list } = store;

  return (
    <div className="List">
      {list.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
};

export const List = observer(ListBase);
