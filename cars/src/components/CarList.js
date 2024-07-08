import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

export default function CarList() {
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const name = useSelector((state) => state.form.name);

  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => {
            handleCarDelete(car);
          }}
          className="button is-danger"
        >
          {" "}
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
