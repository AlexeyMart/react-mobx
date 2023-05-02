import { FC } from "react";
import { observer } from "mobx-react";
import "./Cart.css";
import { cartStore } from "../../store/cart";
import { Button, Typography, InputNumber } from "antd";

const CartBase: FC = () => {
  const { incrementAmount, decrementAmount, amount, price, total, setPrice } =
    cartStore;

  const handleChangePrice = (value: number | null) => {
    if (!value) {
      return;
    }

    setPrice(value);
  };

  return (
    <div className="Cart">
      <InputNumber value={price} onChange={handleChangePrice} />
      <Typography.Paragraph>Amount: {amount}</Typography.Paragraph>
      <Typography.Paragraph>Total: {total}</Typography.Paragraph>

      <Button onClick={incrementAmount}>Increment Amount</Button>
      <Button onClick={decrementAmount}>Decrement Amount</Button>
    </div>
  );
};

export const Cart = observer(CartBase);
