import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const { state } = useNavigation();

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] font-sans">
      {state === "loading" && <Loader />}
      <Header />

      <div className="overflow-scroll ">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
