/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./CartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDel() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDel}>
      Delete
    </Button>
  );
}

export default DeleteItem;
