import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getCartPrice, getCartQuantity } from "./CartSlice";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

function CartOverview() {
  const { cart } = useSelector((state) => state.cart);
  // console.log(cart);
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);
  const totalQuantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  if (!cart?.length) return null;

  // const CartQuantity = useSelector(getCartQuantity);
  // const CartPrice = useSelector(getCartPrice);
  // console.log(CartQuantity, CartPrice);

  // if (!CartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>${formatCurrency(totalPrice)}</span>
        {/* <span>{CartQuantity} pizzas</span>
        <span>${formatCurrency(CartPrice)}</span> */}
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
