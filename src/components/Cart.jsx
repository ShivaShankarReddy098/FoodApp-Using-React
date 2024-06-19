import { useState } from "react";
import { useSelector } from "react-redux";
function Cart(itemAvailable) {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.counter.value);
  // console.log(cart);
  const cartItem = useSelector((state) => state.counter.items);
  console.log("CART ADDED", cartItem);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="mainDialog">
      <button onClick={openDialog} className="text-button">
        Cart({cart})
      </button>
      <dialog open={isOpen} className="dialogMain">
        <h1>Cart</h1>
        <div className="dialogDiv">
          <ul>
            {cartItem.map((item) => (
              <li key={item.itemId}>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{item.quantity}</p>
                <p>+ | -</p>
                <p>Remove</p>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={closeDialog} className="text-button1">
          Close
        </button>
        <button id="buy-btn">BUY NOW</button>
      </dialog>
    </div>
  );
}

export default Cart;
