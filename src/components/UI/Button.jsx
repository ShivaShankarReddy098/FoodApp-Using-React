import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counter/counterSlice";

export default function Button({
  children,
  textOnly,
  ClassName,
  meal,
  itemAvailable,
  ...props
}) {
  // const cart = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(
      increment({
        id: meal.id,
        name: meal.name,
        price: meal.price,
      })
    );
  };
  // const cssClasses = textOnly ? "text-button" : "button";
  //   cssClasses += " " + ClassName;
  return (
    <button className="button" {...props} onClick={handleCart}>
      {children}
    </button>
  );
}
