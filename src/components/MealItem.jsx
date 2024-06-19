import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
export default function MealItem({ mealItem }) {
  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:9835/${mealItem.image}`}
          alt={mealItem.name}
        />
        <div>
          <h3>{mealItem.name}</h3>
          <p className="meal-item-price">
            {" "}
            {currencyFormatter.format(mealItem.price)}
          </p>
          <p className="meal-item-description">{mealItem.description}</p>
        </div>
        <p className="meal-item-actions">
          {/* <button>Add To Cart</button> */}
          <Button textOnly={false} meal={mealItem} itemAvailable={true}>
            Add To Cart
          </Button>
        </p>
      </article>
    </li>
  );
}
