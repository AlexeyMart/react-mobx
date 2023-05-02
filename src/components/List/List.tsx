import { FC, useEffect } from "react";
import { store } from "../../store/todo";
import { observer } from "mobx-react";
import { Item } from "../Item/Item";
import { Spin } from "antd";
import "./List.css";

const ListBase: FC = () => {
  const { list, fetchInitialData, loading } = store;

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  if (loading) {
    return <Spin className="List__loader" />;
  }

  return (
    <div className="List">
      {list.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
};

export const List = observer(ListBase);
