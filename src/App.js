import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { showNotification } from "./store/uiSlice";

let firstRender = true;

function App() {
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.ui.notification);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    const sendRequest = async () => {
      dispatch(
        showNotification({
          open: true,
          message: "Sending Request.",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://redux-http-3311f-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      console.log(data);
      dispatch(
        showNotification({
          open: true,
          message: "Request Sent Successfully.",
          type: "success",
        })
      );
    };

    sendRequest().catch((err) => {
      dispatch(
        showNotification({
          open: true,
          message: "Sending Request Failed.",
          type: "error",
        })
      );
    });
  }, [cart]);

  const cartItems = useSelector((state) => state.cart.itemList);
  console.log(cartItems);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
